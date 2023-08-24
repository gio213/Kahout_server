import delete_answer_by_question_id from "../../controllers/answersControllers/deleteAnswersByQuestionID.js";
import { Router } from "express";
const router = Router();

router.delete("/:id", delete_answer_by_question_id);

export default router;
