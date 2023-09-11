import connection from "../../config/db.js";

const getUserByID = async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM Users WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({ message: "User not found with this ID" });
      throw err;
    } else {
      res.status(201).json(result);
    }
  });
};

export default getUserByID;
