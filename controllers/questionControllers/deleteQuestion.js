import db from "../../config/db.js";

const delete_question = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM Questions WHERE id=${id}`;
  db.query(query, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({ message: "Question not found" });
      throw err;
    } else {
      res.status(201).json({ message: "Question deleted" });
    }
  });
};

export default delete_question;
