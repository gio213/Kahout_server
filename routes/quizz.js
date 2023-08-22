import express from 'express';
import getQuizz from '../controllers/quizzControllers/getQuizz.js';
import addQuizz from '../controllers/quizzControllers/addQuizz.js';
import renameQuizz from '../controllers/quizzControllers/renameQuizz.js';

let router = express.Router();
router.post('/', addQuizz)
router.get('/', getQuizz)
router.put('/', renameQuizz)

export default router;