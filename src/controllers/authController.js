import pool from "../config/db.js";
import bcrypt from "bcrypt";

// Registration
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verification
    if (!email || !password) {
      return res.status(400).json({
        message: "Both Email and Password are required for registration",
      });
    }
    // Salting && Hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // DB Result
    const result = await pool.query(
      "INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id,email",
      [email, hashedPassword],
    );
    // Return results
    return res
      .status(200)
      .json({ message: "Users registred successfully", user: result.rows[0] });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "email already exists!" });
    }
    console.error("Registration error", error.message);
    return res.status(500).json({ error: "Server error during registration" });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both Email and Password are required for login!" });
    }
    // Search for the email
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "invalid email or password!" });
    }
    // Select the user
    const user = result.rows[0];
    // Matching the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.status(200).json({
      message: "Login successfull",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error", error.message);
    return res.status(500).json({ error: "Server Error during Loading" });
  }
};
