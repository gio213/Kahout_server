import db from "../../config/db.js";

const get_question_by_id = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM Questions WHERE id=${id}`;
  db.query(query, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({ message: "Question not found" });
      throw err;
    } else {
      res.status(201).json(result);
    }
  });
};
export default get_question_by_id;
