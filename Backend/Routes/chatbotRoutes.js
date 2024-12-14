const express = require('express');
const { signup, login } = require('../Controller/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { getMovies, getMovieById, getMovieByName } = require('../Controller/movieController');

const router = express.Router();

router.get('/', getMovies);
router.get('/:movieId', getMovieById);
router.get('/',getMovieByName);


module.exports = router;