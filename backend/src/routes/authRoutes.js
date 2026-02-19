import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

export default router;
