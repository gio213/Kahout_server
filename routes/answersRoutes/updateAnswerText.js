import express from "express";
import updateAnswer from "../../controllers/answersControllers/updateAnswerText";
const router = express.Router();

router.put("/:id", updateAnswer);

export default router;