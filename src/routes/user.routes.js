import { Router } from "express";
import { registerUser } from "../controllers/user.controler.js";
import { uploadUserImages } from "../middlewares/multer.middlewar.js"; // use the pre-configured fields middleware

const router = Router();

// ✅ attach multer middleware
router.post("/register", uploadUserImages, registerUser);

export default router;

// ✅ attach multer middleware
router.post("/register", uploadUserImages, registerUser);