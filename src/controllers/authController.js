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

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both email and password are required!" });
    }
    // search the user
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 RETURNING id,email",
      [email],
    );
    if (result.rows === 0) {
      return res.status(401).json({ message: "invalid mail or password" });
    }
    const user = result.rows[0];
    // Comparing the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid mail or password" });
    }
    return res
      .status(200)
      .json({ message: "Login successfull", user: result.rows[0] });
  } catch (error) {
    console.error("Login Error", error.message);
    return res.status(500).json({ error: "Server Error during the loading" });
  }
};
