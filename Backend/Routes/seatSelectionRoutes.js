const router = require('express').Router();  // Corrected
const { insertSeatDetails } = require('../Controller/purchaseController');

router.get('/seatSelection', insertSeatDetails);

module.exports = router;
