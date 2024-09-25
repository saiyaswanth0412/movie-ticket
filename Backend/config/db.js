// db.js
require('dotenv').config(); 
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,  
    port: process.env.DB_PORT, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME, 
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false 
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
