import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';


import swaggerOptions from "../config/swaggerConfig.js";

let router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOptions);
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
fs.writeFileSync('swagger.json', JSON.stringify(swaggerSpec, null, 2));
/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Register a new user.
 *     description: Register a new user with a unique username and hashed password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *                 example: john_doe
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: password123
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Bad request or username already in use.
 * /api/login:
 *   post:
 *     summary: Log in a user.
 *     description: Log in a user with their username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *                 example: john_doe
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: password123
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User logged in
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR...
 *       400:
 *         description: Bad request, incorrect password, or user does not exist.
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users .
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 1
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: Azzouz
 *                       password:
 *                         type: string
 *                         description: The user's encrypted password.
 *                         example: "$2b$08$l.dw1P8sX1eNPAbf69TrO.V4m.n.F.LnzSKHHJAJA0rwdBPxMzNBC"
 */
/**
 * @swagger
 * /api/answers/{id}:
 *   put:
 *     summary: Update an answer by ID.
 *     description: Update an existing answer in the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the answer to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: updatedAnswer
 *         description: The updated answer object.
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 text:
 *                   type: string
 *                   description: The updated text of the answer.
 *                 correct:
 *                   type: boolean
 *                   description: Indicates if the answer is correct.
 *     responses:
 *       200:
 *         description: Successfully updated the answer.
 *       500:
 *         description: Internal server error.
 */

export default router;