// ask player for access code
import express from 'express';
import enterCode from '../../controllers/roomsControllers/enterCode.js';
let router = express.Router();

router.post('/', enterCode)

export default router;