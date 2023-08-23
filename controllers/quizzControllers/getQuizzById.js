import connection from "../../config/db.js";

const getQuizzById = (req, res) => {
    const id = req.params.id; 
    const value = [id];
    const query = 'SELECT * FROM Quizz WHERE id = ?';
    connection.query(query, value, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ message: 'Quizz not found' });
        } else {
            const quizz = results[0];
            res.json(quizz);
        }
    });
};


export default getQuizzById;