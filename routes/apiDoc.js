import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
/* import fs from 'fs'; */


import swaggerOptions from "../config/swaggerConfig.js";

let router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOptions);
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/* fs.writeFileSync('swagger.json', JSON.stringify(swaggerSpec, null, 2));
 */
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
 * /api/create_quizz:
 *   post:
 *     summary: Add a new quiz.
 *     description: Add a new quiz with a name.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the quiz.
 *                 example: Geography Quiz
 *     responses:
 *       200:
 *         description: Quiz added successfully.

 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/quizzlist:
 *   get:
 *     summary: Retrieve a list of quizzes.
 *     description: Retrieve a list of quizzes from the database.
 *     responses:
 *       200:
 *         description: A list of quizzes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The quiz ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the quiz.
 *                     example: Geography Quiz
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/quizzlist/{id}:
 *   get:
 *     summary: Retrieve a specific quiz by its ID.
 *     description: Retrieve a specific quiz by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the quiz to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The retrieved quiz.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The quiz ID.
 *                 name:
 *                   type: string
 *                   description: The quiz name.
 *                 room_id:
 *                   type: integer
 *                   description: The ID of the associated room.
 */
/**
 * @swagger
 * /api/rooms:
 *   post:
 *     summary: Add a new room.
 *     description: Add a new room to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the room.
 *                 example: Room A
 *               capacity:
 *                 type: integer
 *                 description: The capacity of the room.
 *                 example: 50
 *               code:
 *                 type: string
 *                 description: The code for the room.
 *                 example: ABC123
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user associated with the room.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Room added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The success message.
 *                   example: Room added successfully.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message.
 *                   example: Server Error
 */
/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Retrieve a list of rooms.
 *     description: Retrieve a list of rooms from the database.
 *     responses:
 *       200:
 *         description: A list of rooms.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The room ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the room.
 *                     example: Room A
 *                   capacity:
 *                     type: integer
 *                     description: The capacity of the room.
 *                     example: 50
 *                   code:
 *                     type: string
 *                     description: The code for the room.
 *                     example: ABC123
 *                   user_id:
 *                     type: integer
 *                     description: The ID of the user associated with the room.
 *                     example: 1
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message.
 *                   example: Server Error
 */
/**
 * @swagger
 * /api/join_room:
 *   post:
 *     summary: Retrieve room ID by entering a code.
 *     description: Retrieve the room ID associated with a given code.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The code associated with the room.
 *                 example: ABC123
 *     responses:
 *       200:
 *         description: Room ID retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roomId:
 *                   type: integer
 *                   description: The room ID.
 *                   example: 1
 *       404:
 *         description: Room not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message.
 *                   example: Room not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message.
 *                   example: Server Error
 */
/**
 * @swagger
 * /api/player_infos:
 *   post:
 *     summary: Create a new player.
 *     description: Create a new player with the provided username, room ID, and current score.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the player.
 *                 example: JohnDoe
 *               room_id:
 *                 type: integer
 *                 description: The ID of the room the player belongs to.
 *                 example: 1
 *               current_score:
 *                 type: integer
 *                 description: The current score of the player.
 *                 example: 100
 *     responses:
 *       200:
 *         description: Player created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fieldCount:
 *                   type: integer
 *                 affectedRows:
 *                   type: integer
 *                 insertId:
 *                   type: integer
 *                 info:
 *                   type: string
 *                 serverStatus:
 *                   type: integer
 *                 warningStatus:
 *                   type: integer
 *                 message:
 *                   type: string
 *                   description: The success message.
 *                   example: Player created successfully
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message.
 *                   example: Server Error
 */
/**
 * @swagger
 * /api/playerList/{room_id}:
 *   get:
 *     summary: Retrieve a list of players in a specific room, sorted by current score in descending order.
 *     parameters:
 *       - in: path
 *         name: room_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the room for which to retrieve the player list.
 *     responses:
 *       200:
 *         description: A list of players in the specified room, sorted by current score.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     description: The username of the player.
 *                     example: john_doe
 *                   current_score:
 *                     type: integer
 *                     description: The current score of the player.
 *                     example: 500
 *       500:
 *         description: Server error while processing the request.
 */


/**
 * @swagger
 * /api/topFive/{room_id}:
 *   get:
 *     summary: Retrieve a list of top five players with the highest scores.
 *     parameters:
 *       - in: path
 *         name: room_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the room for which to retrieve the player list.
 *     responses:
 *       200:
 *         description: A list of top five players with their usernames and current scores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     description: The username of the player.
 *                     example: john_doe
 *                   current_score:
 *                     type: integer
 *                     description: The current score of the player.
 *                     example: 500
 *       500:
 *         description: Server error while processing the request.
 */

/**
 * @swagger
 * /api/quizzlist/update-room/{id}:
 *   put:
 *     summary: Update the room_id of a specific quiz by its ID.
 *     description: Update the room_id of a specific quiz by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the quiz to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: room_id
 *         required: true
 *         description: The new room_id value to set for the quiz.
 *         schema:
 *           type: object
 *           properties:
 *             room_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: The updated quiz.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The quiz ID.
 *                 name:
 *                   type: string
 *                   description: The quiz name.
 *                 room_id:
 *                   type: integer
 *                   description: The updated room_id.
 */
export default router;