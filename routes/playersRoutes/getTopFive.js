import express from "express";

import getTopFive from "../../controllers/playersControllers/getTopFive.js";
const router = express.Router();

router.get('/', getTopFive);

export default router;