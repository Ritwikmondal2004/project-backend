import { Router } from "express";
import { registerUser } from "../controllers/user.controler.js";
import { upload } from "../middlewares/multer.middlewar.js"; // ✅ fixed import name and curly braces

const router = Router();

// ✅ attach multer middleware
router.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

export default router;
