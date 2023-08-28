import express from "express";
import update_answer_by_id from "../../controllers/answersControllers/updateAnswerTextAndCorrect.js";
const router = express.Router();

router.put("/:id", update_answer_by_id);

export default router;
