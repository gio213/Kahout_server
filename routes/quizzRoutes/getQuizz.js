import express from 'express';
import getQuizz from '../../controllers/quizzControllers/getQuizz.js';
import getQuizzById from '../../controllers/quizzControllers/getQuizzById.js';
import updateQuizzRoomId from '../../controllers/quizzControllers/updateQuizzRoomId.js';

let router = express.Router();

router.get('/', getQuizz)
router.get('/:id', getQuizzById)
router.put('/update-room/:id', updateQuizzRoomId);
export default router;