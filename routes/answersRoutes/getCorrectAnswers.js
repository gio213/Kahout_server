import express from "express";
import getCorrectAnswers from "../../controllers/answersControllers/getCorrectAnswers.js";
const router = express.Router();

router.get("/:id", getCorrectAnswers);

export default router;
