import connection from "../../config/db";

const getUserByID = (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM Users WHERE id = ${id}`, (error, results) => {
    if (error) {
      res.json("we don't have  user with this id");
    }
    res.json(results);
  });
};

export default getUserByID;
