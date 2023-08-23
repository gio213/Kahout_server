import connection from "../../config/db.js";

const getQuizzById = (req, res) => {
    connection.query('SELECT * FROM Quizz', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};


export default getQuizzById;