import rooms from "./rooms.js";
import joinRoom from "./joinRoom.js"

import express from "express";
const router = express.Router();

// add, show rooms
router.use("/",rooms)
// enter code to join room as player
router.use("/join_room",joinRoom)

 
export default router;