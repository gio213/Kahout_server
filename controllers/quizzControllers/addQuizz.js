import connection from "../../config/db.js";

const addQuizz = (req, res) => {
    const name = req.body.name;
    const values = [name];
    const query = 'INSERT INTO Quizz (name) VALUES (?)';
    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).json(results);
    });
};

export default addQuizz;