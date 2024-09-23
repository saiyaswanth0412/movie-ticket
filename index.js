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
// app.get('/bestfriend', (req, res) => {
//     const message = `
//         Harshitha is an incredible person, not just as a best friend but also as someone with a kind heart and a brilliant mind. 
//         She's always there for those who matter to her, offering unwavering support and bringing positive energy into any room she walks into. 
//         Anyone would be lucky to have her in their life, and she deserves all the happiness in the world!`;
        
//     res.send(message);
// });
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
