import express from "express";
import getPlayers from "../../controllers/playersControllers/getPlayers.js";
const router = express.Router();

router.get('/:id', getPlayers);

export default router;