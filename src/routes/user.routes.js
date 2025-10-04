import { Router } from "express";
import {userRegister} from "../controllers/user.controler.js";
const router = Router();

router.post("/register", userRegister);

export default router;
