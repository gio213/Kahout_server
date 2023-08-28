import createPLayer from "./createPlayers.js";
import getPlayers from "./getPlayers.js"
import getTopFive from "./getTopFive.js"

import express from "express";
const router = express.Router();

//create player
router.use("/player_infos",createPLayer)
// get list of players by ascending score
router.use("/playerList",getPlayers)
// get Top five
router.use("/topFive",getTopFive)

 
export default router;