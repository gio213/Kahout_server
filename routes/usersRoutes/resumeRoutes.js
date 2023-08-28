import express from 'express';
import usersResume from '../../controllers/usersControllers/usersResume.js'
const router = express.Router();

//id : user_id
router.get('/:id', usersResume);

export default router;