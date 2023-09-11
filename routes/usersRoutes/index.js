import getUsers from "./users.js";
import backgroungImageRoute from './BackgroudImage.js'
import getUserByID from "./getUserByID.js";
import express from "express";
const router = express.Router();

// show list of users

router.use("/", getUsers)

// get user's image background 
router.use('/backgroundImage', backgroungImageRoute)

// show user by id
router.use("/", getUserByID);

export default router;

