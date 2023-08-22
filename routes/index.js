import express from "express";
import usersRouter from "./users.js";
import authRouter from "./auth.js";

let router = express.Router();
router.use("/sign_up", authRouter);
router.use("/users", usersRouter);

export default router;
