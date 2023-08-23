import express from "express";

import getTopFive from "../../controllers/playersControllers/getTopFive.js";
const router = express.Router();

router.get('/:id', getTopFive);

export default router;