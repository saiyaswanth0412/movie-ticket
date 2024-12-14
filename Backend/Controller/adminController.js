const connection = require("../config/db");

const deleteMovie = async (req, res) => {
  const { movieId } = req.query;
  try {
    const query = "DELETE FROM Movies WHERE Movie_ID = ?";
    const query2 = "DELETE FROM Theatre_Movies WHERE Movie_ID = ?";

    //Delete movie from Theatre_Movies table first
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

const addMovie = async (req, res) => {
  const {
    title,
    Genre,
    Language,
    rating,
    status,
    description,
    price,
    image,
    backgroundImage,
    Duration= '02:28:00'
  } = req.body;

  if (
    !title ||
    !Genre ||
    !Language ||
    !rating ||
    !status ||
    !description ||
    !price ||
    !image ||
    !backgroundImage
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const query = `INSERT INTO Movies (title, Genre, Language, rating, status, description, price, image, backgroundImage, Duration) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    title,
    Genre,
    Language,
    rating,
    status,
    description,
    price,
    image,
    backgroundImage,
    Duration
  ];

  connection.query(query, values, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error adding movie" });
    }
    res.status(200).json({ message: "Movie added successfully", results });
  });
};

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
};
