const connection = require("../config/db");

const fetchScreensByTheatreId = async (req,res) => {
    try {
        const {theatre_id} = req.query;
        if(!theatre_id) res.status(400).json({error: 'Theatre ID is required'});
        const query = 'SELECT * FROM screen_movies WHERE theatre_id = ?';
        connection.query(query, [theatre_id], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error in fetching screens' });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred while fetching screens' });
    }
    
}

module.exports = {fetchScreensByTheatreId}