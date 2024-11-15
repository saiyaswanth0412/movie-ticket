const router = require('express').Router();
const { fetchScreensByTheatreId } = require('../Controller/theatreController');


router.get('/getScreens', fetchScreensByTheatreId);

module.exports = router;