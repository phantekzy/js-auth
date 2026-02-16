// Imports
import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = Router();
//Routers
router.post("/register", registerUser);
router.post("/login", loginUser);
//Exports
export default router;
