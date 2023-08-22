import express from 'express';
import getUsers from '../controllers/users.js';
import connection from "../config/db.js";

let router = express.Router();

router.get('/', getUsers)

export default router;