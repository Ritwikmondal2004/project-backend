import { Router } from "express";
import { loginUser, registerUser,logoutUser,refreshAccessToken } from "../controllers/user.controler.js";
import { uploadUserImages } from "../middlewares/multer.middlewar.js"; // use the pre-configured fields middleware
import { verifyJWT } from "../middlewares/authentication.middleware.js"; 

const router = Router();

// ✅ attach multer middleware
router.post("/register", uploadUserImages, registerUser);
//login
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)



router.route("/refresh-token").post(refreshAccessToken)
export default router;

