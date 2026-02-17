//IMPORTS
import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Auth Server is Running");
});
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http:/localhost${PORT}`);
});
