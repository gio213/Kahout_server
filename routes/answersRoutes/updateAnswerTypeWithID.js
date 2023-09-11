import updateAnswerTypeWithID from "../../controllers/answersControllers/updateAnswerTypeWithID.js";
import express from "express";
const router = express.Router();

router.put("/:id", updateAnswerTypeWithID);

export default router;
