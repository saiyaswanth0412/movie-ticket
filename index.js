// Import necessary modules
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database connection

// Create an instance of the express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a port
const PORT = process.env.PORT || 3000;

// Sample route to demonstrate DB connection
app.get('/data', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, Harshitha!');//test point harshitha ramchandra reddy the best friend easter egg
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
