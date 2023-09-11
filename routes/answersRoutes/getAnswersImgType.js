import getAnswersImgType from "../../controllers/answersControllers/getAnswersImgType.js";
import express from "express";
const router = express.Router();

router.get("/:id", getAnswersImgType);

export default router;
