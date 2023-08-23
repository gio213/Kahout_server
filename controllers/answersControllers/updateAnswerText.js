import connection from "../../config/db.js";

const updateAnswer = (req, res) => {
    const answerId = req.params.id; 
    const { text, correct } = req.body;
    
    const query = 'UPDATE Answers SET text = ?, correct = ? WHERE id = ?';
    const values = [text, correct, answerId];
    
    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).json(results);
    });
};

export default updateAnswer;
