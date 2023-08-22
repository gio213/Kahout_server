import express from 'express';
import getQuizz from '../controllers/getQuizz.js';
import addQuizz from '../controllers/addQuizz.js';
import renameQuizz from '../controllers/renameQuizz.js';

let router = express.Router();
router.post('/', addQuizz)
router.get('/',getQuizz)
router.put('/',renameQuizz)

export default router;