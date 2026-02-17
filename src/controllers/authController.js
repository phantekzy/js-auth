import pool from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register user
export const regusterUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both Email and Password are required!" });
    }
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    const result = pool.query(
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
