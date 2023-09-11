import connection from "../../config/db.js";

const updateAnswerTypeWithID = async (req, res) => {
  const { id } = req.params;
  const type = req.body.type;
  console.log(type, id);
  const query = `Update Answers SET type = ${type} WHERE id = ${id}`;
  connection.query(query, (error, results) => {
    if (error || results.affectedRows === 0) {
      res.status(404).json({ message: "Answer not found" });
      throw error;
    } else {
      res.status(200).json({ message: "Answers type  updated" });
    }
  });
};

export default updateAnswerTypeWithID;
