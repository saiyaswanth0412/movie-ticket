const connection = require('../config/db');

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await db.query('SELECT * FROM Movies');
    res.status(200).json(movies.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
};

// Get movie by ID
const getMovieById = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await db.query('SELECT * FROM Movies WHERE Movie_ID = $1', [movieId]);
    if (movie.rows.length) {
      res.status(200).json(movie.rows[0]);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movie' });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  const { title, Genre, Duration, Language, Release_Date, rating, status, year, description, date, time, price, image, details, backgroundImage } = req.body;
  try {
    await db.query(
      'INSERT INTO Movies (title, Genre, Duration, Language, Release_Date, rating, status, year, description, date, time, price, image, details, backgroundImage) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
      [title, Genre, Duration, Language, Release_Date, rating, status, year, description, date, time, price, image, details, backgroundImage]
    );
    res.status(201).json({ message: 'Movie added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding movie' });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  const { movieId } = req.params;
  const updates = req.body;
  try {
    const setClause = Object.keys(updates)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');
    const values = [movieId, ...Object.values(updates)];
    await db.query(`UPDATE Movies SET ${setClause} WHERE Movie_ID = $1`, values);
    res.status(200).json({ message: 'Movie updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating movie' });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  try {
    await db.query('DELETE FROM Movies WHERE Movie_ID = $1', [movieId]);
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting movie' });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
