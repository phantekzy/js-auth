// Imports
import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at https:/localhost:${PORT}`);
});
