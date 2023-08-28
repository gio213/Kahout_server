import connection from "../../config/db.js";

const quizzResume =  async (req, res) => {
    try {
        const quizzId = req.params.id;
        const value = [quizzId]
        const query = `
        SELECT
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
        Quizz 
    INNER JOIN
        Questions ON Quizz.id = Questions.quizz_id
    LEFT JOIN
        Answers ON Questions.id = Answers.question_id
    WHERE
        Quizz_id = ?;
    
        `;

        const [rows, fields] = await connection.promise().query(query,value); 
        const formattedData = {
            quizz: [],
        };

        for (const row of rows) {
            
            const questionId = row.question_id;
            const answerId = row.answer_id

         
             // Search for the quizz in rooms array or add it if it doesn't exist
            let quizz = formattedData.quizz.find(q => q.id === quizzId);
            if (!quizz) {
                quizz = {
                    id: quizzId,
                    name: row.quizz_name,
                    questions: []
                };
                formattedData.quizz.push(quizz);
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
export default quizzResume;