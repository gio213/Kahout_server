import { Router } from "express";
import { sign_post, login_post } from "../controllers/authController/auth.js";
const router = Router();
router.post("/sign_up", sign_post);
router.post("/login", login_post);

export default router;
