require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const authRoutes = require('./Routes/authRoutes'); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes); 

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

// Sample greeting route
app.get('/', (req, res) => {
    res.send('Hello, Harshitha!'); // Test point for your friend
});

// // Best friend message route
// app.get('/bestfriend', (req, res) => {
//     const message = `
//         Harshitha is an incredible person, not just as a best friend but also as someone with a kind heart and a brilliant mind. 
//         She's always there for those who matter to her, offering unwavering support and bringing positive energy into any room she walks into. 
//         Anyone would be lucky to have her in their life, and she deserves all the happiness in the world!`;
    
//     res.send(message); // Sending the message as a response
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
