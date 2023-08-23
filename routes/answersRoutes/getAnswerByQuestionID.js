import express from "express";
import getAnswersByQuestionID from "../../controllers/answersControllers/getAnswersByQuestionID.js";
const router = express.Router();

router.get("/:id", getAnswersByQuestionID);

export default router;
