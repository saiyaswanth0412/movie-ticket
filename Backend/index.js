require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const authRoutes = require('./Routes/authRoutes'); 
const movieRoutes = require('./Routes/movieRouter');
const theatreRoutes = require('./Routes/theatreRouter');
const screenRoutes = require('./Routes/screenRouter');
const seatSelection=require('./Routes/seatSelectionRoutes')
const authMiddleware = require('./middleware/authMiddleware');
const req = require('express/lib/request');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes); 
app.use('/api/movie', authMiddleware,movieRoutes);
app.use('/api/theatre',theatreRoutes);
app.use('/api/screen',authMiddleware,screenRoutes);
app.use('/api/seatSelection',seatSelection)

const PORT = process.env.PORT || 3000;

app.get('/data', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
