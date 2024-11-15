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
        const query1 = 'SELECT * FROM Movies WHERE Movie_ID = ?';
        const query2 = 'SELECT t.name, t.description, t.rating, t.image FROM Theatre_Movies tm INNER JOIN Theatres t ON tm.Theatre_ID = t.Theatre_ID WHERE tm.Movie_ID = ?';

        connection.query(query1, [req.params.movieId], (error, movieResults) => {
            if (error) {
                return res.status(500).json({ error: 'Database error' });
            }
            if (movieResults.length === 0) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            connection.query(query2, [req.params.movieId], (error, theatreList) => {
                if (error) {
                    return res.status(500).json({ error: 'Database error' });
                }
                movieResults[0].theaters = theatreList
                res.status(200).json({ selectedMovie: movieResults[0] });
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred', msg: error.message });
    }
};

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

module.exports = { getMovies,getMovieById,getMovieByName};