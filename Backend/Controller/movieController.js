const connection = require("../config/db");

const getMovies = async (req, res) => {
    try {
        const query = 'SELECT * FROM Movies';
        connection.query(query, (error, results) => {         
        res.status(200).json(results);
        })
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}
const getMovieById = async (req, res) => {
    try {
        const query = 'SELECT * FROM Movies WHERE Movie_ID = ?';
        connection.query(query, [req.params.movieId], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}
const getMovieByName = async (req, res) => {
    try {
        const query = 'SELECT * FROM Movies WHERE title = ?';
        connection.query(query, [req.query.movieName], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}
module.exports = { getMovies,getMovieById,getMovieByName };