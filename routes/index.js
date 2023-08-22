
import express from 'express'
import usersRouter from './users.js'
import quizzRouter from './quizz.js'
import roomsRouter from './rooms.js'

let router = express.Router();
router.use('/rooms', roomsRouter)
router.use('/users', usersRouter);
router.use('/quizz', quizzRouter)


export default router;
