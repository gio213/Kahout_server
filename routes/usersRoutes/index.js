import getUsers from "./users.js";
import resumeRoutes from "./resumeRoutes.js";
import getUserByID from "./getUserByID.js";
import express from "express";
const router = express.Router();

// show list of users
router.use("/", getUsers);
// resume all data
router.use("/resume", resumeRoutes);
// show user by id
router.use("/:id", getUserByID);

export default router;
