import express from "express";
import createPLayer from "../../controllers/playersControllers/createPLayer.js";
const router = express.Router();

router.post('/', createPLayer);

export default router;