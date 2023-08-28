import express from "express";
import updateCorrectAnswer from "../../controllers/answersControllers/updateCorrectAnswer.js";
const router = express.Router();

router.put("/:id", updateCorrectAnswer);

export default router;
