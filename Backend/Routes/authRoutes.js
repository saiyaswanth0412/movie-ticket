const express = require('express');
const { signup, login } = require('../Controller/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);


router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Access granted to protected route', user: req.user });
});

module.exports = router;
