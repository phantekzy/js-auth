import pool from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register users
export const regusterUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both Email and Password are required!" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await pool.query(
      "INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id,email",
      [email, hashedPassword],
    );
    res.status(200).json({ message: "User created", user: result.rows[0] });
  } catch (error) {
    if (error.code === "23505")
      return res.status(400).json({ message: "Email already exists" });
    res.status(500).json({ error: "Server Error during registration" });
  }
};

// Login users
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0)
      return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {}
};
