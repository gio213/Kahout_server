import connection from "../../config/db.js";

const renameQuizz = (req, res) => {
    const quizzId = req.params.id;
    const newName = req.body.newName;

    const query = 'UPDATE Quizz SET name = ? WHERE id = ?';
    const values = [newName, quizzId];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).json({ message: 'Quizz renamed successfully' });
    });
};

export default renameQuizz;
