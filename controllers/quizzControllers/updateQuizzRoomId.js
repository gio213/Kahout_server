import connection from "../../config/db.js";

const updateQuizzRoomId = (req, res) => {
    const id = req.params.id;
    const { room_id } = req.body;

    const query = 'UPDATE Quizz SET room_id = ? WHERE id = ?';
    const values = [room_id, id];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: 'Quizz not found' });
        } else {
            res.status(200).json({ message: 'Quizz room_id updated successfully' });
        }

    });
};

export default updateQuizzRoomId;





