import connection from "../../config/db.js";

const addRoom = (req, res) => {
    const name = req.body.name;
    const capacity = req.body.capacity;
    const code = req.body.code;
    const user_id = req.body.user_id;
    const values = [name, capacity, code, user_id];
    const query = 'INSERT INTO Rooms (name, capacity, code, user_id) VALUES (?, ?, ?, ?)';
    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).json(results);
    });
};

export default addRoom;