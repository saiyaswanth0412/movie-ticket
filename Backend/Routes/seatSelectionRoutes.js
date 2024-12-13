const { bookseats } = require('../Controller/bookingController');

const router = require('express').Router();  // Corrected

router.post('/seatSelection', bookseats);

module.exports = router;
