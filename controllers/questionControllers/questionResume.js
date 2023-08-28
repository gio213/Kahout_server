import connection from "../../config/db.js";

const questionResume =  async (req, res) => {
    try {
        const questionId = req.params.id;
        const value = [questionId]
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
        Answers.correct AS answer_correct
    FROM
        Questions
    INNER JOIN
        Answers ON Questions.id = Answers.question_id
    WHERE
        question_id = ?;
    
        `;

        const [rows, fields] = await connection.promise().query(query,value); 
        const formattedData = {
            question: [],
        };

        for (const row of rows) {
            
            const answerId = row.answer_id

            // Search for the question in quizz array or add it if it doesn't exist
            let question = formattedData.question.find(q => q.id === questionId);
            if (!question) {
                question = {
                    id: questionId,
                    text: row.question_text,
                    type: row.question_type,
                    time_limit: row.question_time_limit,
                    multi_select: row.question_multi_select,
                    answers: []

                };
                formattedData.question.push(question);
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
export default questionResume;