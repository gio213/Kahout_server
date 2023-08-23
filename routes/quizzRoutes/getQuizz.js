import express from 'express';
import getQuizz from '../../controllers/quizzControllers/getQuizz.js';
import getQuizzById from '../../controllers/quizzControllers/getQuizzById.js';


let router = express.Router();

router.get('/', getQuizz)
router.get('/:id', getQuizzById)

export default router;