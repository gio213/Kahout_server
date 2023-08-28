import express from "express";
import update_answer_text_by_id from "../../controllers/answersControllers/updateAnswerText.js";
const router = express.Router();

router.put("/:id", update_answer_text_by_id);

export default router;
