// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

async function runSeed() {
  try {
    // Check if DATABASE_URL is loaded
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL not found in environment variables');
    }
    
    console.log('🔌 Connecting to database...');
    const sql = neon(process.env.DATABASE_URL);
    
    const seedData = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
    
    // Split by semicolon and run each statement
    const statements = seedData.split(';').filter(stmt => stmt.trim());
    
    console.log(`📝 Executing ${statements.length} SQL statements...`);
    
    for (const statement of statements) {
      if (statement.trim()) {
        await sql(statement);
        console.log('✅ Executed statement');
      }
    }
    
    console.log('🎉 Seed data added successfully!');
  } catch (error) {
    console.error('❌ Error running seed:', error.message);
  }
}

runSeed();