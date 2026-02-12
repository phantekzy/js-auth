import "dotenv/config";
import bcrypt from "bcrypt";
import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("The Auth server is Running");
});
app.post("/register", async (req, res) => {});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is Alive on https:://localhost:${PORT}`);
});
