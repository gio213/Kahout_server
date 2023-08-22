import connection from "../config/db.js";

const getRooms = (req, res) => {
    connection.query('SELECT * FROM Rooms', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};


  export default getRooms;