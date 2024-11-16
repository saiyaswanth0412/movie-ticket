const connection = require("../config/db");

const getScreenDetails = async (req, res) => {
    try {
        const screen_id = req.query.screen_id;
        const movieQuery = 'SELECT * FROM screen_movies sm JOIN Movies m WHERE sm.screen_id = ? and sm.movie_id = m.Movie_ID';
        const seatQuery = 'SELECT Seat_Name,isBooked FROM Seats WHERE screen_id = ?';
            connection.query(seatQuery,[screen_id],(error,seatResults) => {
                if(error){
                    return res.status(500).json({error: 'Error in fetching seats availablity'});
                }
                seatResults = transformSeats(seatResults);
                res.status(200).json({seatResults});
            });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: 'An unexpected error occurred while fetching screen info' });
    }
}
function transformSeats(seatResults){
    const rows= {};
    seatResults.forEach(seat => {
      const rowLetter = seat.Seat_Name.charAt(0); 
      const seatNumber = seat.Seat_Name.slice(1);  
        if (!rows[rowLetter]) rows[rowLetter] = [];
        rows[rowLetter].push({
        number: seat.Seat_Name,
        booked: seat.isBooked === 1  
      });
    });
  
    const rowArray = Object.keys(rows).map(rowKey => {
      while (rows[rowKey].length < 10) {
        const lastSeatNumber = parseInt(rows[rowKey][rows[rowKey].length - 1]?.number.slice(1)) || 0;
        const nextSeatNumber = lastSeatNumber + 1;
        rows[rowKey].push({
          number: `${rowKey}${nextSeatNumber}`,
          booked: false
        });
      }
      return rows[rowKey];
    });
    return rowArray;
  }
module.exports = { getScreenDetails }