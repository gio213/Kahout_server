import express from 'express';
import getRooms from '../../controllers/roomsControllers/getRooms.js';
import addRoom from '../../controllers/roomsControllers/addRoom.js';
let router = express.Router();
router.get('/', getRooms)
router.post('/', addRoom)

export default router;