import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The server is running on https:/localhost:${PORT}`);
});
