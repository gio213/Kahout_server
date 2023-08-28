
import usersRouter from "./usersRoutes/index.js";
import authRouter from "./auth/auth.js";
import quizzRouter from "./quizzRoutes/index.js";
import playerRouter from "./playersRoutes/index.js"
import apiDocRouter from "./apiDoc.js";
import answersRoute from "./answersRoutes/index.js"
import roomsRouter from "./roomsRoutes/index.js"
import questionRouter from "./questionRoutes/index.js"
import apiDocRouter from "./apiDoc.js";



import express from "express";
let router = express.Router();
// api doc router
router.use("/api-docs", apiDocRouter);
// register or log in
router.use("/", authRouter);

router.use("/rooms", roomsRouter);

router.use("/users", usersRouter);

router.use("/question", questionRouter);

router.use("/quizz", quizzRouter)

router.use("/players", playerRouter)

router.use("/answers", answersRoute)





export default router;
