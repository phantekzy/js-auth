import bcrypt from "bcrypt";
import pool from "../config/db.js";
//Registration
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both Email and Password are required!" });
    }

    // Salting & Hashing
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    // Result
    const result = pool.query(
      "INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id,email",
      [email, hashedPassword],
    );
    return res
      .status(200)
      .json({ message: "User successfully registred", user: result.rows[0] });
  } catch (error) {
    if (error.code === "23505")
      return res.status(400).json({ message: "Email already exists" });
  }
  console.error("Reg Error:", error);
  return req.status(500).json({ error: "Server Error during registration" });
};
