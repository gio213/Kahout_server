import question from "./question.js";
import resumeRoute from "./resumeRoute.js"

import express from "express";
const router = express.Router();

// show list of users
router.use("/",question)
// resume all data
router.use("/resume",resumeRoute)

 
export default router;