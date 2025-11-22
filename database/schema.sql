-- Smart Block Project Database Schema
-- PostgreSQL Database Schema for Neon Serverless

-- Enable UUID extension (optional, for future use)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blocks table
CREATE TABLE IF NOT EXISTS blocks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    url TEXT NOT NULL,
    color VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT blocks_title_not_empty CHECK (LENGTH(TRIM(title)) > 0),
    CONSTRAINT blocks_url_not_empty CHECK (LENGTH(TRIM(url)) > 0),
    CONSTRAINT blocks_url_format CHECK (url ~ '^https?://.*'),
    CONSTRAINT blocks_color_format CHECK (color ~ '^bg-(red|blue|green|yellow|purple|orange|pink|indigo|teal|cyan)-500$'),
    CONSTRAINT blocks_category_valid CHECK (category IN (
        'Technology',
        'E-Commerce', 
        'Education',
        'Health & Fitness',
        'Finance',
        'Entertainment'
    ))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blocks_category ON blocks(category);
CREATE INDEX IF NOT EXISTS idx_blocks_created_at ON blocks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blocks_url ON blocks(url);

-- Create unique index on URL to prevent duplicates (optional)
-- CREATE UNIQUE INDEX IF NOT EXISTS idx_blocks_url_unique ON blocks(url);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at on row updates
DROP TRIGGER IF EXISTS update_blocks_updated_at ON blocks;
CREATE TRIGGER update_blocks_updated_at
    BEFORE UPDATE ON blocks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create view for block statistics (optional)
CREATE OR REPLACE VIEW blocks_stats AS
SELECT 
    category,
    COUNT(*) as total_blocks,
    MIN(created_at) as first_created,
    MAX(created_at) as last_created
FROM blocks 
GROUP BY category
ORDER BY total_blocks DESC;

-- Create view for recent blocks (optional)
CREATE OR REPLACE VIEW recent_blocks AS
SELECT * FROM blocks 
ORDER BY created_at DESC 
LIMIT 10;

-- Add comments for documentation
COMMENT ON TABLE blocks IS 'Stores link blocks for the Smart Block Project dashboard';
COMMENT ON COLUMN blocks.id IS 'Primary key, auto-incrementing identifier';
COMMENT ON COLUMN blocks.title IS 'Display title for the block';
COMMENT ON COLUMN blocks.description IS 'Optional description of the link';
COMMENT ON COLUMN blocks.url IS 'The actual URL/link (must be valid HTTP/HTTPS)';
COMMENT ON COLUMN blocks.color IS 'Tailwind CSS background color class';
COMMENT ON COLUMN blocks.category IS 'Category for organizing blocks';
COMMENT ON COLUMN blocks.created_at IS 'Timestamp when block was created';
COMMENT ON COLUMN blocks.updated_at IS 'Timestamp when block was last updated';

-- Grant permissions (adjust as needed for your deployment)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON blocks TO your_app_user;
-- GRANT USAGE, SELECT ON SEQUENCE blocks_id_seq TO your_app_user;

-- Create contact_messages table
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  contact_id INT NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived'))
);

-- Indexes for performance
CREATE INDEX idx_contact_messages_contact_id ON contact_messages(contact_id);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Function to update updated_at automatically
CREATE OR REPLACE FUNCTION update_contact_messages_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

-- Trigger to update updated_at before update
CREATE TRIGGER update_contact_messages_updated_at
BEFORE UPDATE ON contact_messages
FOR EACH ROW
EXECUTE FUNCTION update_contact_messages_updated_at();
