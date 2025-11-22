-- Smart Block Project Seed Data
-- Sample data for all 6 categories with realistic links and descriptions

-- Clear existing data (optional - uncomment if needed)
-- TRUNCATE TABLE blocks RESTART IDENTITY CASCADE;

-- Insert comprehensive seed data
INSERT INTO blocks (title, description, url, color, category) VALUES

-- Technology Category
('GitHub', 'The world''s largest code repository and collaboration platform for developers', 'https://github.com', 'bg-purple-500', 'Technology'),
('Stack Overflow', 'The largest online community for programmers to learn and share knowledge', 'https://stackoverflow.com', 'bg-purple-500', 'Technology'),
('Visual Studio Code', 'Free, open-source code editor with powerful debugging and Git integration', 'https://code.visualstudio.com', 'bg-purple-500', 'Technology'),

-- E-Commerce Category  
('Amazon', 'World''s largest online marketplace for books, electronics, and everything else', 'https://amazon.com', 'bg-orange-500', 'E-Commerce'),
('Shopify', 'Leading e-commerce platform for creating and managing online stores', 'https://shopify.com', 'bg-orange-500', 'E-Commerce'),
('eBay', 'Global online auction and marketplace for buying and selling goods', 'https://ebay.com', 'bg-orange-500', 'E-Commerce'),

-- Education Category
('Khan Academy', 'Free world-class education in math, science, programming and more', 'https://khanacademy.org', 'bg-green-500', 'Education'),
('Coursera', 'Online courses and degrees from top universities and companies worldwide', 'https://coursera.org', 'bg-green-500', 'Education'),
('edX', 'High-quality courses from Harvard, MIT and other leading institutions', 'https://edx.org', 'bg-green-500', 'Education'),

-- Health & Fitness Category
('MyFitnessPal', 'Comprehensive calorie counter and nutrition tracker for healthy living', 'https://myfitnesspal.com', 'bg-pink-500', 'Health & Fitness'),
('Strava', 'Social fitness network for tracking running, cycling and other activities', 'https://strava.com', 'bg-pink-500', 'Health & Fitness'),
('Headspace', 'Meditation and mindfulness app for stress relief and better sleep', 'https://headspace.com', 'bg-pink-500', 'Health & Fitness'),

-- Finance Category
('Mint', 'Free personal finance management tool for budgeting and expense tracking', 'https://mint.com', 'bg-blue-500', 'Finance'),
('Yahoo Finance', 'Comprehensive financial news, data and analysis for investors', 'https://finance.yahoo.com', 'bg-blue-500', 'Finance'),
('Coinbase', 'Leading cryptocurrency exchange platform for buying and selling digital assets', 'https://coinbase.com', 'bg-blue-500', 'Finance'),

-- Entertainment Category
('Netflix', 'World''s leading streaming entertainment service with thousands of TV shows and movies', 'https://netflix.com', 'bg-red-500', 'Entertainment'),
('Spotify', 'Digital music streaming platform with millions of songs and podcasts', 'https://spotify.com', 'bg-red-500', 'Entertainment'),
('YouTube', 'Global video sharing platform for entertainment, education and creativity', 'https://youtube.com', 'bg-red-500', 'Entertainment');

-- Verify the data was inserted correctly
-- SELECT category, COUNT(*) as count FROM blocks GROUP BY category ORDER BY category;