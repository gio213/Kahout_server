
import express from 'express';
import addQuizz from '../../controllers/quizzControllers/addQuizz.js';
let router = express.Router();


router.post('/', addQuizz)

export default router;