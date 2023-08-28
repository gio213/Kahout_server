import express from 'express';
import questionResume from '../../controllers/questionControllers/questionResume.js'
const router = express.Router();

//id : user_id
router.get('/:id', questionResume);

export default router;