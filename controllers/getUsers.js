import connection from "../config/db.js";

const getUsers = (req, res) => {
    connection.query('SELECT * FROM Users', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};


  export default getUsers;