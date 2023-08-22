import express from "express";
import usersRouter from "./users.js";
import quizzRouter from "./quizz.js";
import roomsRouter from "./roomsRoutes/rooms.js";
import questionRouter from "./question.js";
import authRouter from "./auth.js";
import joinRoomRouter from "./roomsRoutes/joinRoom.js";

let router = express.Router();

router.use("/users", usersRouter);
// enter code to join room as player
router.use("/join_room", joinRoomRouter);
router.use("/rooms", roomsRouter);
router.use("/quizz", quizzRouter);
router.use("/", authRouter);
router.use("/", questionRouter);

export default router;
