import getUsers from "./users.js";
import resumeRoutes from "./resumeRoutes.js"

import express from "express";
const router = express.Router();

// show list of users
router.use("/",getUsers)
// resume all data
router.use("/resume",resumeRoutes)

 
export default router;