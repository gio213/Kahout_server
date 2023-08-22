import express from 'express';
import getRooms from '../controllers/getRooms.js';
import addRoom from '../controllers/addRoom.js';
let router = express.Router();
router.get('/',getRooms)

export default router;