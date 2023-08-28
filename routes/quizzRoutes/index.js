import createQuizz from "./createQuizz.js";
import getQuizz from "./getQuizz.js"
import renameQuizz from "./renameQuizz.js"
import resumeRoute from "./resumeRoute.js"

import express from "express";
const router = express.Router();

// add, show , rename, resume quizz
router.use("/create_quizz",createQuizz)

router.use("/quizzlist",getQuizz)

router.use("/rename_quizz",renameQuizz)

router.use("/resume",resumeRoute)

 
export default router;