const connection = require("../config/db");

const bookseats = async (req, res) => {
    try {
        const { screen_id: Screen_Id, selectedSeats: SeatNumber } = req.body;

        if (!Screen_Id || !SeatNumber || SeatNumber.length === 0) {
            return res.status(400).json({ error: 'Screen ID and Seat Number are required' });
        }
        const isBooked = true;
        const seatPromises = SeatNumber.map((seat) => {
            return new Promise((resolve, reject) => {
                const updateSeat = 'UPDATE Seats SET isBooked = ? WHERE Screen_ID = ? AND Seat_Name = ?';
                connection.query(updateSeat, [isBooked, Screen_Id, seat], (error, results) => {
                    if (error) {
                        reject({ error: 'Error in booking seat', seat, details: error });
                    } else {
                        resolve(results);
                    }
                });
            });
        });
        await Promise.all(seatPromises);
        res.status(200).json({ message: 'Seats booked successfully' });

    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'An unexpected error occurred while booking seats' });
    }
};

module.exports = { bookseats };
