
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import fs from 'fs';

import swaggerOptions from "../config/swaggerConfig.js";

let router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/* fs.writeFileSync('swagger.json', JSON.stringify(swaggerSpec, null, 2));
 */


/**
 * @swagger
 * /api/users/resume/{id}:
 *   get:
 *     summary: Get formatted user data including rooms, quizzes, questions, and answers.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user for which to retrieve the data.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: All user related data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The ID of the user.
 *                     username:
 *                       type: string
 *                       description: The username of the user.
 *                     password:
 *                       type: string
 *                       description: The password of the user.
 *                     rooms:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: The ID of the room.
 *                           name:
 *                             type: string
 *                             description: The name of the room.
 *                             example: Room A
 *                           capacity:
 *                             type: integer
 *                             description: The capacity of the room.
 *                             example: 50
 *                           code:
 *                             type: string
 *                             description: The code for the room.
 *                             example: ABC123
 *                           quizzes:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: integer
 *                                   description: The ID of the quiz.
 *                                 name:
 *                                   type: string
 *                                   description: The name of the quiz.
 *                                 questions:
 *                                   type: array
 *                                   items:
 *                                     type: object
 *                                     properties:
 *                                       id:
 *                                         type: integer
 *                                         description: The ID of the question.
 *                                       text:
 *                                         type: string
 *                                         description: The text of the question.
 *                                       type:
 *                                         type: string
 *                                         description: The type of the question.
 *                                       time_limit:
 *                                         type: integer
 *                                         description: The time limit for answering the question.
 *                                       multi_select:
 *                                         type: boolean
 *                                         description: Whether the question allows multiple answers.
 *                                       answers:
 *                                         type: array
 *                                         items:
 *                                           type: object
 *                                           properties:
 *                                             id:
 *                                               type: integer
 *                                               description: The ID of the answer.
 *                                             text:
 *                                               type: string
 *                                               description: The text of the answer.
 *                                             correct:
 *                                               type: integer
 *                                               description: Whether the answer is correct (0 or 1).
 *       500:
 *         description: Server error while processing the request.
 */

/**
 * @swagger
 * /api/sign_up:
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
 *     summary: Retrieve a list of users.
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
 * /api/quizz/resume/{id}:
 *   get:
 *     summary: Get quiz details by ID along with associated questions and answers.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the quiz to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved quiz, questions, and associated answers.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 quizz:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The ID of the quiz.
 *                     name:
 *                       type: string
 *                       description: The name of the quiz.
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: The ID of the question.
 *                           text:
 *                             type: string
 *                             description: The text of the question.
 *                           type:
 *                             type: string
 *                             description: The type of the question.
 *                           time_limit:
 *                             type: integer
 *                             description: The time limit for answering the question.
 *                           multi_select:
 *                             type: boolean
 *                             description: Whether the question allows multiple answers.
 *                           answers:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: integer
 *                                   description: The ID of the answer.
 *                                 text:
 *                                   type: string
 *                                   description: The text of the answer.
 *                                 correct:
 *                                   type: integer
 *                                   description: Whether the answer is correct (0 or 1).
 *       500:
 *         description: Server error while processing the request.
 */

/**
 * @swagger
 * /api/quizz/create_quizz:
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
 * /api/quizz/quizzlist:
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
 * /api/quizz/quizzlist/{id}:
 *   get:
 *     summary: Retrieve a quiz by its ID.
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
 * /api/question/resume/{id}:
 *   get:
 *     summary: Get question details by ID along with associated answers.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved question and associated answers.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 question:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The ID of the question.
 *                     text:
 *                       type: string
 *                       description: The text of the question.
 *                     type:
 *                       type: string
 *                       description: The type of the question.
 *                     time_limit:
 *                       type: integer
 *                       description: The time limit for answering the question.
 *                     multi_select:
 *                       type: boolean
 *                       description: Whether the question allows multiple answers.
 *                     answers:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: The ID of the answer.
 *                           text:
 *                             type: string
 *                             description: The text of the answer.
 *                           correct:
 *                             type: integer
 *                             description: Whether the answer is correct (0 or 1).
 *       500:
 *         description: Server error while processing the request.
 */

/**
 * @swagger
 * /api/question:
 *   post:
 *     summary: Create a new question.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The text of the question.
 *                 example: What is the capital of France?
 *               type:
 *                 type: string
 *                 description: The type of the question (e.g., "quiz", "true_false").
 *                 example: quiz
 *               time_limit:
 *                 type: integer
 *                 description: The time limit for answering the question.
 *                 example: 30
 *               multi_select:
 *                 type: boolean
 *                 description: Whether the question allows multiple answers.
 *                 example: 0
 *               quizz_id:
 *                 type: integer
 *                 description: The ID of the quiz to which the question belongs.
 *                 example: 1
 *     responses:
 *       201:
 *         description: Question created successfully.
 *       500:
 *         description: Server error while processing the request.
 */
/**
 * @swagger
 * /api/question/{id}:
 *   get:
 *     summary: Retrieve a question by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The question object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the question.
 *                   example: 1
 *                 text:
 *                   type: string
 *                   description: The text of the question.
 *                   example: What is the capital of France?
 *                 type:
 *                   type: string
 *                   description: The type of the question (e.g., quiz, true/false).
 *                   example: quiz
 *                 time_limit:
 *                   type: integer
 *                   description: The time limit for answering the question (in seconds).
 *                   example: 60
 *                 multi_select:
 *                   type: boolean
 *                   description: Whether the question allows multiple answers.
 *                   example: 0
 *                 quizz_id:
 *                   type: integer
 *                   description: The ID of the quiz this question belongs to.
 *                   example: 1
 *                 score:
 *                   type: integer
 *                   description: The score associated with the question.
 *                   example: 100
 *       404:
 *         description: Question not found.
 */
/**
 * @swagger
 * /api/question/{id}:
 *   delete:
 *     summary: Delete a question by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Question deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: Question deleted
 *       404:
 *         description: Question not found.
 */

/**
 * @swagger
 * /api/question/allquestions/{id}:
 *   get:
 *     summary: Get all questions by quiz ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the quiz for which to retrieve the questions.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of questions associated with the specified quiz ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the question.
 *                     example: 1
 *                   text:
 *                     type: string
 *                     description: The text of the question.
 *                     example: What is the capital of France?
 *                   type:
 *                     type: string
 *                     description: The type of the question (e.g., "quiz", "true_false").
 *                     example: quiz
 *                   time_limit:
 *                     type: integer
 *                     description: The time limit for answering the question.
 *                     example: 30
 *                   multi_select:
 *                     type: boolean
 *                     description: Whether the question allows multiple answers.
 *                     example: 0
 *                   quizz_id:
 *                     type: integer
 *                     description: The ID of the quiz to which the question belongs.
 *                     example: 1
 *       404:
 *         description: Questions not found with the specified quiz ID.
 */
/**
 * @swagger
 * /api/question/{id}:
 *   put:
 *     summary: Update a question by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The text of the question.
 *                 example: What is the capital of France?
 *               type:
 *                 type: string
 *                 description: The type of the question (e.g., "quiz", "true_false").
 *                 example: quiz
 *               time_limit:
 *                 type: integer
 *                 description: The time limit for answering the question.
 *                 example: 30
 *               multi_select:
 *                 type: boolean
 *                 description: Whether the question allows multiple answers.
 *                 example: 0
 *               quizz_id:
 *                 type: integer
 *                 description: The ID of the quiz to which the question belongs.
 *                 example: 1
 *     responses:
 *       201:
 *         description: Question updated successfully.
 *       500:
 *         description: Server error while processing the request.
 */
/**
 * @swagger
 * /api/answers/add_answer:
 *   post:
 *     summary: Create a new answer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The text of the answer.
 *                 example: Paris
 *               question_id:
 *                 type: integer
 *                 description: The ID of the question to which the answer belongs.
 *                 example: 1
 *               correct:
 *                 type: boolean
 *                 description: Whether the answer is correct or not.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Answer created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Answer created
 *                 id:
 *                   type: integer
 *                   example: 123
 *       500:
 *         description: Server error while processing the request.
 */
/**
 * @swagger
 * /api/answers/get_answers/{id}:
 *   get:
 *     summary: Retrieve answers for a specific question.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question for which to retrieve answers.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of answers for the specified question.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the answer.
 *                     example: 1
 *                   text:
 *                     type: string
 *                     description: The text of the answer.
 *                     example: Paris
 *                   question_id:
 *                     type: integer
 *                     description: The ID of the question to which the answer belongs.
 *                     example: 1
 *                   correct:
 *                     type: boolean
 *                     description: Whether the answer is correct or not.
 *                     example: true
 *       404:
 *         description: Answers not found for the specified question.
 *       500:
 *         description: Server error while processing the request.
 */

/**
 * @swagger
 * /api/answers/get_correct_answers/{id}:
 *   get:
 *     summary: Retrieve correct answers for a specific question.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question for which to retrieve correct answers.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of correct answers for the specified question.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the answer.
 *                     example: 1
 *                   text:
 *                     type: string
 *                     description: The text of the answer.
 *                     example: Paris
 *                   question_id:
 *                     type: integer
 *                     description: The ID of the question to which the answers belongs.
 *                     example: 1
 *                   correct:
 *                     type: boolean
 *                     description: Whether the answer is correct or not.
 *                     example: true
 *       404:
 *         description: Answers not found for the specified question.
 *       500:
 *         description: Server error while processing the request.
 */
/**
 * @swagger
 * /api/answers/delete_answer/{id}:
 *   delete:
 *     summary: Delete an answer by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the answer to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Answer deleted successfully.
 *       404:
 *         description: Answer not found.
 *       500:
 *         description: Server error while processing the request.
 */
/**
 * @swagger
 * /api/answers/delete_answers/{id}:
 *   delete:
 *     summary: Delete answers by question ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the question for which to delete answers.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Answers deleted successfully.
 *       404:
 *         description: Answers not found for the specified question ID.
 *       500:
 *         description: Server error while processing the request.
 */

/**
 * @swagger
 * /api/answers/update_answer/{id}:
 *   put:
 *     summary: Update an answer.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the answer to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The updated text of the answer.
 *                 example: Berlin
 *     responses:
 *       200:
 *         description: Answer updated successfully.
 *       404:
 *         description: Answer not found.
 *       500:
 *         description: Server error while processing the request.
 */
/**
 * @swagger
 * /api/answers/update_correct_answers/{id}:
 *   put:
 *     summary: Update the correctness of a specific answer by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the answer to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correct:
 *                 type: boolean
 *             example:
 *               correct: 1
 *     responses:
 *       200:
 *         description: The updated answer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 */
/**
 * @swagger
 * /api/answers/update_answers_text_correct/{id}:
 *   put:
 *     summary: Update an answer.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the answer to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The updated text of the answer.
 *                 example: Berlin
 *               correct:
 *                 type: boolean
 *                 example: 1
 *     responses:
 *       200:
 *         description: Answer updated successfully.
 *       404:
 *         description: Answer not found.
 *       500:
 *         description: Server error while processing the request.
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
 * /api/rooms/join_room:
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
 * /api/players/player_infos:
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
 * /api/players/playerList/{room_id}:
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
 * /api/players/topFive/{room_id}:
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
 * /api/quizz/quizzlist/update-room/{id}:
 *   put:
 *     summary: Update the room_id of a specific quizz by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the quiz to update.
 *         schema:
 *           type: integer
 *     requestBody: # Avec requestBody
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               room_id:
 *                 type: integer
 *             example:
 *               room_id: 123
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
