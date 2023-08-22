import { Router } from "express";
import question_post from "../controllers/questionControllers/question.js";
const router = Router();
router.post("/question", question_post);

export default router;
