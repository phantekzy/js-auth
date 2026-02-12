import "dotenv/config";
import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("The Auth Server is Running");
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    // Salting and hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`New user registration attempt : ${email}`);

    res.status(200).json({
      message: "User data processed sucessfully",
      user: {
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is Alive on https::/localhost:${PORT}`);
});
