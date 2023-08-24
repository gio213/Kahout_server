import delete_answer_by_id from "../../controllers/answersControllers/deleteAnswerByID.js";
import { Router } from "express";
const router = Router();
router.delete("/:id", delete_answer_by_id);

export default router;
