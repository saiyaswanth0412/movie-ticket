const express = require('express');
const {
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../Controller/adminController')

const router = express.Router();


router.post('/addMovie', addMovie);

router.put('/updateMovie', updateMovie);

router.delete('/deleteMovie', deleteMovie);

module.exports = router;