import createAnswer from "./createAnswer.js";
import deleteAnswerByID from "./deleteAnswerByID.js"
import deleteAnswersByQuestionID from "./deleteAnswersByQuestionID.js"
import getAnswersByQuestionID from "./getAnswerByQuestionID.js"
import getCorrectAnswers from "./getCorrectAnswers.js"
import updateAnswerText from "./updateAnswerText.js"
import updateCorrectAnswer from "./updateCorrectAnswer.js"
import updateAnswerTextAndCorrect from "./updateAnswerTextAndCorrect.js"

import express from "express";
const router = express.Router();

// create answer for questions
router.use("/add_answer",createAnswer)
// delete answer by id
router.use("/delete_answer",deleteAnswerByID)
// delete answers by question id
router.use("/delete_answers",deleteAnswersByQuestionID)
// get answers by question id
router.use("/get_answers",getAnswersByQuestionID)
// get correct answers by question id
router.use("/get_correct_answers", getCorrectAnswers)
//update text  answer
router.use("/update_answer",updateAnswerText)
//update the correctness of a specific answer 
router.use("/update_correct_answers",updateCorrectAnswer)
// update text and correct answer !!!!!!!!!!! check api
router.use("/update_answers_text_correct",updateAnswerTextAndCorrect)
 
export default router;