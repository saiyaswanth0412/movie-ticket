const connection = require("../config/db");

const getScreenDetails = async (req, res) => {
    try {
        const screen_id = req.params.screen_id;
        const movieQuery = 'SELECT * FROM screen_movies sm JOIN Movies m WHERE sm.screen_id = ? and sm.movie_id = m.Movie_ID';
        const seatQuery = 'SELECT Seat_Name,isBooked FROM Seats WHERE screen_id = ?';
            connection.query(seatQuery,[screen_id],(error,seatResults) => {
                if(error){
                    return res.status(500).json({error: 'Error in fetching seats availablity'});
                }
                res.status(200).json({seatResults});
            });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: 'An unexpected error occurred while fetching screen info' });
    }
}

module.exports = { getScreenDetails }