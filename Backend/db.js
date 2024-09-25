// db.js
require('dotenv').config(); // Load environment variables from .env file
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // Use environment variable
    port: process.env.DB_PORT, // Use environment variable
    user: process.env.DB_USER, // Use environment variable
    password: process.env.DB_PASSWORD, // Use environment variable
    database: process.env.DB_NAME, // Use environment variable
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false // Conditional SSL configuration
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
