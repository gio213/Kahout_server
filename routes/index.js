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
import createAnswerRouter from "../controllers/answersControllers/createAnswer.js";
import updateAnswer from "./answersRoutes/updateAnswerTextAndCorrect.js";
import apiDocRouter from "./apiDoc.js";
import getAnswersByQuestionID from "../routes/answersRoutes/getAnswerByQuestionID.js";
import deleteAnswerRoute from "../routes/answersRoutes/deleteAnswerByID.js";
import delete_answer_by_question_id from "../routes/answersRoutes/deleteAnswersByQuestionID.js";
import update_answer_text_by_id from "./answersRoutes/updateAnswerText.js";

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
// update answers text and correct together by id
router.use("/update_answer_text_correct", updateAnswer);
// update answer text by id
router.use("/update_answer_text", update_answer_text_by_id);

// get answers by question id
router.use("/get_answers", getAnswersByQuestionID);

// delete answer by id
router.use("/delete_answer", deleteAnswerRoute);

// delete answers by question id
router.use("/delete_answers", delete_answer_by_question_id);

export default router;
