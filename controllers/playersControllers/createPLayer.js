import connection from "../../config/db.js";

const createPLayer = (req, res) => {
    const {username , room_id, current_score } = req.body;
    const values = [username , room_id, current_score];
    const query = 'INSERT INTO Players (username , room_id, current_score) VALUES (?, ?, ?)'
    connection.query(query,values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).json(results);
    });
};


  export default createPLayer;
