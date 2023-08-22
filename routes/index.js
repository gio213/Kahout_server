
import express from 'express'
import usersRouter from './users.js'
import quizzRouter from './quizz.js'
import roomsRouter from './rooms.js'
import authRouter from "./auth.js";

let router = express.Router();

router.use('/rooms', roomsRouter)
router.use('/quizz', quizzRouter)

router.use("/sign_up", authRouter);
router.use("/users", usersRouter);

export default router;
