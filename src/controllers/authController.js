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
  } catch (error) {}
};
