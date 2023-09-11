import express from "express";
import getUserByID from "../../controllers/usersControllers/getUserByID.js";

let router = express.Router();

router.get("/:id", getUserByID);

export default router;
