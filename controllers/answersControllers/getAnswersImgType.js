import connection from "../../config/db.js";
const getAnswersImgType = async (req, res) => {
  const id = req.params.id;
  const query = `SELECT type FROM Answers WHERE Answers id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(404).json({ message: "Answers not found" });
      throw err;
    } else {
      res.status(201).json(result);
    }
  });
};

export default getAnswersImgType;
