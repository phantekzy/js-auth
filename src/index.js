import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
// PORT
const PORT = process.env.PORT || 3000;
// PORT LISTENING
app.listen(PORT, () => {
  console.log(`The Server is Running on http:/localhost:${PORT}`);
});
