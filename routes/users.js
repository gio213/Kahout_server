import express from "express";
import getUsers from "../controllers/usersControllers/getUsers.js";

let router = express.Router();

router.get("/", getUsers);

export default router;
