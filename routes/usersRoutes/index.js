import getUsers from "./users.js";

import backgroungImageRoute from './BackgroudImage.js'
import express from "express";
const router = express.Router();

// show list of users
router.use("/", getUsers)

// get user's image background 
router.use('/backgroundImage', backgroungImageRoute)


export default router;