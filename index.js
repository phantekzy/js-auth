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
    const { mail, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    // Salting and hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch (error) {}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is Alive on https::/localhost:${PORT}`);
});
