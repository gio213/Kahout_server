import connection from "../config/db.js";

const addUsers = (req, res) => {
    const {username , password } = request.body;
    const values = [username , password];
    const query = 'INSERT INTO Users (username , password) VALUES ($1 $2)'
    connection.query(query,values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            response.status(500).send('Server Error');
            return;
        }
        res.status(200).json(results.rows[0]);
    });
};


  export default addUsers;

