const connection = require("../config/db");

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await db.query("SELECT * FROM Movies");
    res.status(200).json(movies.rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching movies" });
  }
};

// Get movie by ID
const getMovieById = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await db.query("SELECT * FROM Movies WHERE Movie_ID = $1", [
      movieId,
    ]);
    if (movie.rows.length) {
      res.status(200).json(movie.rows[0]);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching movie" });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  const {
    title,
    Genre,
    Duration,
    Language,
    Release_Date,
    rating,
    status,
    year,
    description,
    date,
    time,
    price,
    image,
    details,
    backgroundImage,
  } = req.body;
  try {
    await db.query(
      "INSERT INTO Movies (title, Genre, Duration, Language, Release_Date, rating, status, year, description, date, time, price, image, details, backgroundImage) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
      [
        title,
        Genre,
        Duration,
        Language,
        Release_Date,
        rating,
        status,
        year,
        description,
        date,
        time,
        price,
        image,
        details,
        backgroundImage,
      ]
    );
    res.status(201).json({ message: "Movie added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding movie" });
  }
};

const deleteMovie = async (req, res) => {
  const { movieId } = req.query;
  try {
    const query = "DELETE FROM Movies WHERE Movie_ID = ?";
    const query2 = "DELETE FROM Theatre_Movies WHERE Movie_ID = ?";
    connection.query(query2, [movieId], (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Error deleting movie" });
      } else {
        connection.query(query, [movieId], (error, results) => {
          if (error) {
            return res
              .status(500)
              .json({ error: "Error deleting movie", error });
          }
          res
            .status(200)
            .json({ message: "Movie deleted successfully", results });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Error deleting movie" });
  }
};

const updateMovie = async (req, res) => {
  const { movieId } = req.query;
  const { title, subtitle, image, details } = req.body;

  let updateFields = [];
  let updateValues = [];

  if (title) {
    updateFields.push("title = ?");
    updateValues.push(title);
  }

  if (updateFields.length === 0) {
    return res.status(400).json({ error: "No fields provided to update" });
  }

  updateValues.push(Number(movieId));

  const query = `UPDATE Movies SET ${updateFields.join(
    ", "
  )} WHERE Movie_ID = ?`;

  connection.query(query, updateValues, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error updating movie" });
    }
    res.status(200).json({ message: "Movie updated successfully", results });
  });
};

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};