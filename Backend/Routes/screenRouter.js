const { getScreenDetails } = require('../Controller/screenController');

const router = require('express').Router();

router.get('/:screen_id', getScreenDetails);

module.exports = router;