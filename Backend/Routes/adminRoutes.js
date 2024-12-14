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

router.put('/updateMovie', updateMovie);

router.delete('/deleteMovie', deleteMovie);

module.exports = router;