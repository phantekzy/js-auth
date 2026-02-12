import "dotenv/config";
import bcrypt from "bcrypt";
import express from "express";
import pool from "./config/db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The Auth Server is running ");
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both email and password are required" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await pool.query(
      "INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id , email",
      [email, hashedPassword],
    );
    console.log(`New user has been saved to the DB : ${email}`);

    res.status(200).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Email already Exists" });
    }
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server runs on http:/localhost:${PORT}`);
});
