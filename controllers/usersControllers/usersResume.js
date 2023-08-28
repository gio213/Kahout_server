import connection from "../../config/db.js";

const usersResume =  async (req, res) => {
    try {
        const userId = req.params.id;
        const value = [userId]
        const query = `
        SELECT
        Users.id AS user_id,
        Users.username AS user_username,
        Users.password AS user_password,
        Rooms.id AS room_id,
        Rooms.name AS room_name,
        Rooms.capacity AS room_capacity,
        Rooms.code AS room_code,
        Rooms.user_id AS room_user_id,
        Players.id AS player_id,
        Players.username AS player_username,
        Players.room_id AS player_room_id,
        Players.current_score AS player_current_score,
        Questions.id AS question_id,
        Questions.text AS question_text,
        Questions.type AS question_type,
        Questions.time_limit AS question_time_limit,
        Questions.multi_select AS question_multi_select,
        Questions.quizz_id AS question_quizz_id,
        Questions.score AS question_score,
        Answers.id AS answer_id,
        Answers.text AS answer_text,
        Answers.question_id AS answer_question_id,
        Answers.correct AS answer_correct,
        Quizz.id AS quizz_id,
        Quizz.name AS quizz_name,
        Quizz.room_id AS quizz_room_id
    FROM
        Users 
    INNER JOIN
        Rooms ON Users.id = Rooms.user_id
    INNER JOIN
        Players ON Rooms.id = Players.room_id
    INNER JOIN
        Quizz ON Rooms.id = Quizz.room_id
    INNER JOIN
        Questions ON Quizz.id = Questions.quizz_id
    LEFT JOIN
        Answers ON Questions.id = Answers.question_id
    WHERE
        Users.id = ?;
    
        `;

        const [rows, fields] = await connection.promise().query(query,value); 
        const formattedData = {
            users: [],
        };

        for (const row of rows) {
            
            const roomId = row.room_id;
            const playerId = row.player_id;
            const quizzId = row.quizz_id;
            const questionId = row.question_id;
            const answerId = row.answer_id

            // Search for the user in the array or add him if he does not exist
            let user = formattedData.users.find(user => user.id === userId);
            if (!user) {
                user = {
                    id: userId,
                    username: row.user_username,
                    password: row.user_password,
                    rooms: []

                };
                formattedData.users.push(user);
            }

            
            // Search for the room in user array or add it if it doesn't exist
            let room = user.rooms.find(room => room.id === roomId);
            if (!room) {
                room = {
                    id: roomId,
                    name: row.room_name,
                    capacity: row.room_capacity,
                    code: row.room_code,
                    user_id: row.room_user_id,
                    quizz: [],
                    players: []

                };
                user.rooms.push(room);
            }
           // Search for  player in rooms array or add him if he does not exist
            let player = room.players.find(player => player.id === playerId);
            if (!player) {
                player = {
                    id: playerId,
                    username: row.player_username,
                    room_id: row.player_room_id,
                    current_score: row.player_current_score
                };
                room.players.push(player);
            }
            console.log(rows);

             // Search for the quizz in rooms array or add it if it doesn't exist
            let quizz = room.quizz.find(q => q.id === quizzId);
            if (!quizz) {
                quizz = {
                    id: quizzId,
                    name: row.quizz_name,
                    questions: []
                };
                room.quizz.push(quizz);
            }
            // Search for the question in quizz array or add it if it doesn't exist
            let question = quizz.questions.find(q => q.id === questionId);
            if (!question) {
                question = {
                    id: questionId,
                    text: row.question_text,
                    type: row.question_type,
                    time_limit: row.question_time_limit,
                    multi_select: row.question_multi_select,
                    answers: []

                };
                quizz.questions.push(question);
            }
            // Search for the answer in questions array or add it if it doesn't exist
            let answers = question.answers.find(answer => answer.id === answerId);
            if (!answers) {
                answers = {
                    id: answerId,
                    text: row.answer_text,
                    correct: row.answer_correct

                };
                question.answers.push(answers);
            }



        }
        const formattedJson = JSON.stringify(formattedData, null, 2);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(formattedJson)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
export default usersResume;