const connection = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");

exports.signup = async (req, res) => {
  req.body.phone_number = req.body.mobile;
  const { name, email, password, phone_number } = req.body;
  const role = "User";
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query =
      "INSERT INTO Users (Name, Email, Password, Phone_Number, Role) VALUES (?, ?, ?, ?, ?)";
    connection.query(
      query,
      [name, email, hashedPassword, phone_number, role],
      (error, results) => {
        if (error) {
          return res.status(500).json({ error: "Database error" + error });
        }
        const token = jwt.sign(
          { userId: results.insertId, role: results.Role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        if (results.Role === "Admin") {
          localStorage.setItem("admin", true);
        }
        res.status(201).json({
          message: "User created successfully",
          userId: results.insertId,
          role: results.Role,
          token,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({ error: "Error encrypting password" });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  try {
    const query = "SELECT * FROM Users WHERE Email = ?";
    connection.query(query, [email], (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Database error" });
      }
      const user = results[0];
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      bcrypt.compare(password, user.Password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
          { userId: user.User_ID, role: user.Role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        if (user.Role === "Admin") {
          localStorage.setItem("admin", true);
          return res.status(200).json({ token, role: "Admin" });
        }
        res.json({ token });
      });
    });
  } catch (err) {
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
};
