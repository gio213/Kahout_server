import questionRouter from "./question.js";

import express from 'express'
import usersRouter from './users.js'
import renameQuizzRouter from './quizzRoutes/renameQuizz.js'
import createQuizzRouter from './quizzRoutes/createQuizz.js'
import getQuizzRouter from './quizzRoutes/getQuizz.js'
import roomsRouter from './roomsRoutes/rooms.js'
import authRouter from "./auth.js";
import joinRoomRouter from "./roomsRoutes/joinRoom.js"
import createPlayerRouter from "./playersRoutes/createPlayers.js"
import listOfPlayerRouter from "./playersRoutes/getPlayers.js"
import getTopFiveRouter from "./playersRoutes/getTopFive.js"
import createAnswerRouter from '../controllers/answersControllers/createAnswer.js';
import updateAnswer from "../controllers/answersControllers/updateAnswerText.js";
import apiDocRouter from "./apiDoc.js"

let router = express.Router();
// api doc router
router.use('/api-docs', apiDocRouter)
// register or log in
router.use("/", authRouter);
// add, show rooms
router.use('/rooms', roomsRouter)
// enter code to join room as player

router.use('/join_room', joinRoomRouter)
// add, show , rename quizz
router.use('/create_quizz', createQuizzRouter)
router.use('/rename_quizz', renameQuizzRouter)
router.use('/quizzlist', getQuizzRouter)

router.use("/users", usersRouter);

router.use("/", questionRouter);

//create player 
router.use('/player_infos', createPlayerRouter)
// get list of players by ascending score 
router.use('/playerList', listOfPlayerRouter)
// get Top five
router.use('/topFive', getTopFiveRouter)

// create answer for questions
router.use('/add_answer', createAnswerRouter)
router.use('/update_answer', updateAnswer)




export default router;
