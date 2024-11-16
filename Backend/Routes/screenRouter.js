const { getScreenDetails } = require('../Controller/screenController');

const router = require('express').Router();

router.get('/getScreenSeatsInfo', getScreenDetails);

module.exports = router;