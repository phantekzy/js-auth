import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("The Auth Server is Running");
});
const PORT = process.env.PORT || 3000;
