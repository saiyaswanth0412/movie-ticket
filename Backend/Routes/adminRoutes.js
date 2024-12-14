const express = require('express');
const {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../Controller/adminController')

const router = express.Router();

// Get all movies
router.get('/', getMovies);

// Get a movie by ID
router.get('/:movieId', getMovieById);

// Add a new movie
router.post('/', addMovie);

// Update an existing movie by ID
router.put('/:movieId', updateMovie);

// Delete a movie by ID
router.delete('/:movieId', deleteMovie);

module.exports = router;