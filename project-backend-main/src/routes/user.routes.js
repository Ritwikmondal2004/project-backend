import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPasswored,
  getCurrentUSer,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoerImage,
  UserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controler.js";
import { upload, uploadUserImages } from "../middlewares/multer.middlewar.js"; // use the pre-configured fields middleware
import { verifyJWT } from "../middlewares/authentication.middleware.js";

const router = Router();

// ✅ attach multer middleware
router.post("/register", uploadUserImages, registerUser);
//login
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-passwored").post(verifyJWT, changeCurrentPasswored);
router.route("/current-user").get(verifyJWT, getCurrentUSer);

router.route("/upadte-account").patch(verifyJWT, updateAccountDetails);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("cover-image"), updateUserCoerImage);
router.route("/c/:username").get(verifyJWT, UserChannelProfile);
router.route("/history").get(verifyJWT, getWatchHistory);
export default router;
