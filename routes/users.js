import express from 'express';
import getUsers from '../controllers/getUsers.js';

let router = express.Router();

router.get('/', getUsers)

export default router;