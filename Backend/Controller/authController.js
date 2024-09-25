const connection = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { name, email, password, phone_number } = req.body;
    const role = 'User'; 

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO Users (Name, Email, Password, Phone_Number, Role) VALUES (?, ?, ?, ?, ?)';

        connection.query(query, [name, email, hashedPassword, phone_number, role], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ message: 'User created successfully', userId: results.insertId });
        });
    } catch (err) {
        return res.status(500).json({ error: 'Error encrypting password' });
    }
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    try {
        const query = 'SELECT * FROM Users WHERE Email = ?';
        connection.query(query, [email], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database error' });
            }

            const user = results[0];
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            bcrypt.compare(password, user.Password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }

                const token = jwt.sign({ userId: user.User_ID }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.json({ token });
            });
        });
    } catch (err) {
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
};
