import express from 'express'
import usersRouter from './users.js'
import quizzRouter from './quizz.js'
import roomsRouter from './roomsRoutes/rooms.js'
import authRouter from "./auth.js";
import joinRoomRouter from "./roomsRoutes/joinRoom.js"
import createPlayerRouter from "./playersRoutes/createPlayers.js"
import listOfPlayerRouter from "./playersRoutes/getPlayers.js"
import getTopFiveRouter from   "./playersRoutes/getTopFive.js"
import createAnswerRouter from '../controllers/answersControllers/createAnswer.js';

let router = express.Router();
// register or log in
router.use("/", authRouter);
// add, show rooms
router.use('/rooms', roomsRouter)
// add, show , rename quizz
router.use('/quizz', quizzRouter)

router.use("/users", usersRouter);
// enter code to join room as player
router.use('/join_room', joinRoomRouter)
//create player 
router.use('/player_infos', createPlayerRouter)
// get list of players by ascending score 
router.use('/playerList', listOfPlayerRouter)
// get Top five
router.use('/topFive', getTopFiveRouter)

// create answer for questions
router.use('/add_answer', createAnswerRouter)



export default router;
