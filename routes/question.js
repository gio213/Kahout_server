import { Router } from "express";
import question_post from "../controllers/questionControllers/question.js";
import question_update from "../controllers/questionControllers/updateQutestion.js";
import delete_question from "../controllers/questionControllers/deleteQuestion.js";
import get_question_by_id from "../controllers/questionControllers/getQuestionByID.js";
import get_all_questions_by_quizz_id from "../controllers/questionControllers/getAllQuestionsByQuizzID.js";
const router = Router();
router.post("/question", question_post);
router.put("/question/:id", question_update);
router.delete("/question/:id", delete_question);
router.get("/question/:id", get_question_by_id);
router.get("/allquestions/:id", get_all_questions_by_quizz_id);

export default router;
