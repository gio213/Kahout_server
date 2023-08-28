import express from 'express';
import quizzResume from '../../controllers/quizzControllers/quizzResume.js'
const router = express.Router();

//id : user_id
router.get('/:id', quizzResume);

export default router;