import express from 'express';
import renameQuizz from '../../controllers/quizzControllers/renameQuizz.js';

let router = express.Router();

router.put('/:id', renameQuizz)

export default router;