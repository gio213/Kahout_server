import questionRouter from "../routes/questionRoutes/question.js";

import express from "express";
import usersRouter from "./users.js";
import renameQuizzRouter from "./quizzRoutes/renameQuizz.js";
import createQuizzRouter from "./quizzRoutes/createQuizz.js";
import getQuizzRouter from "./quizzRoutes/getQuizz.js";
import roomsRouter from "./roomsRoutes/rooms.js";
import authRouter from "./auth/auth.js";
import joinRoomRouter from "./roomsRoutes/joinRoom.js";
import createPlayerRouter from "./playersRoutes/createPlayers.js";
import listOfPlayerRouter from "./playersRoutes/getPlayers.js";
import getTopFiveRouter from "./playersRoutes/getTopFive.js";
import createAnswerRouter from "../routes/answersRoutes/createAnswer.js";
import updateAnswer from "../routes/answersRoutes/updateAnswerText.js";
import apiDocRouter from "./apiDoc.js";
import getAnswersByQuestionID from "../routes/answersRoutes/getAnswerByQuestionID.js";
import deleteAnswerRoute from "../routes/answersRoutes/deleteAnswerByID.js";
import delete_answer_by_question_id from "../routes/answersRoutes/deleteAnswersByQuestionID.js";
import updateCorrectAnswerRouter from "../routes/answersRoutes/updateCorrectAnswer.js"
import getCorrectAnswers from "../routes/answersRoutes/getCorrectAnswers.js";
import resumeRouter from "../routes/resumeRoutes.js"
let router = express.Router();
// api doc router
router.use("/api-docs", apiDocRouter);
// register or log in
router.use("/", authRouter);
// add, show rooms

router.use("/rooms", roomsRouter);
// enter code to join room as player

router.use("/join_room", joinRoomRouter);
// add, show , rename quizz
router.use("/create_quizz", createQuizzRouter);
router.use("/rename_quizz", renameQuizzRouter);
router.use("/quizzlist", getQuizzRouter);

router.use("/users", usersRouter);

router.use("/", questionRouter);

router.use("/join_room", joinRoomRouter);

//create player
router.use("/player_infos", createPlayerRouter);

// get list of players by ascending score
router.use("/playerList", listOfPlayerRouter);

// get Top five
router.use("/topFive", getTopFiveRouter);

// create answer for questions
router.use("/add_answer", createAnswerRouter);

//update text and correct answer
router.use("/update_answer", updateAnswer);

//update the correctness of a specific answer 
router.use("/update_correct_answers", updateCorrectAnswerRouter);

// get answers by question id
router.use("/get_answers", getAnswersByQuestionID);

// get correct answers by question id
router.use("/get_correct_answers", getCorrectAnswers)
// delete answer by id
router.use("/delete_answer", deleteAnswerRoute);

// delete answers by question id
router.use("/delete_answers", delete_answer_by_question_id);

//all data
router.use("/users", resumeRouter)

export default router;
