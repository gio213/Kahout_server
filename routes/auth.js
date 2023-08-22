import { Router } from "express";
import sign_post from "../controllers/auth.js";
const router = Router();
router.post("/", sign_post);

export default router;
