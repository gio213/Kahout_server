import connection from "../../config/db.js";
// players list with ascending score

const getPlayers = (req, res) => {
    const room_id = req.params.id;
    const query = 'SELECT username, current_score FROM Players WHERE room_id = ? ORDER BY current_score DESC LIMIT 5';
    const value = [room_id];
    connection.query(query, value, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ message: 'Server Error' });
            return;
        }
        res.json(results);
    });
};


export default getPlayers;


