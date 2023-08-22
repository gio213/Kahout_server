import express from "express";
import getPlayers from "../../controllers/playersControllers/getPlayers.js";
const router = express.Router();

router.get('/', getPlayers);

export default router;