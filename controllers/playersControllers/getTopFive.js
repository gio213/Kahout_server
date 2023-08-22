import connection from "../../config/db.js";
// players list with ascending score
const getPlayers = (req, res) => {
    connection.query('SELECT username, current_score FROM Players ORDER BY current_score DESC LIMIT 5', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

export default getPlayers;


