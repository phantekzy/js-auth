//Imports
import "dotenv/config";
import bcrypt from "bcrypt";
import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("The Auth Server is running");
});
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Both email and password are required !" });
    }
    // Salt and Hash
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log(`New user : ${email}`);

    res.status(200).json({
      message: "User data processed successfully",
      user: {
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is running on https://localhost:${PORT}`);
});
