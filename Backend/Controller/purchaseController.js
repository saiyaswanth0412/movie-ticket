const connection = require("../config/db");

const insertSeatDetails = async (req, res) => {
    try {
        const { Screen_Id, SeatNumber } = req.body;
        
        if (!Screen_Id || !SeatNumber) {
            return res.status(400).json({ error: 'Screen ID and Seat Number are required' });
        }

        const seatName = `Seat-${SeatNumber}`; 
        const isBooked = false; 

        const query = 'INSERT INTO seats (Screen_ID, SeatNumber, isBooked, Seat_Name) VALUES (?, ?, ?, ?)';
        connection.query(query, [Screen_Id, SeatNumber, isBooked, seatName], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error in inserting seat details' });
            }
            res.status(201).json({ message: 'Seat inserted successfully', data: results });
        });
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred while inserting seat details' });
    }
};

module.exports = { insertSeatDetails };
