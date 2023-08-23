import connection from "../../config/db.js";

const get_all_questions_by_quizz_id = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM Questions WHERE quizz_id=${id}`;
  connection.query(query, (err, result) => {
    if (err || result.length === 0) {
      res
        .status(404)
        .json({ message: "Questions not found with this quizz id" });
      throw err;
    } else {
      res.status(201).json(result);
    }
  });
};
export default get_all_questions_by_quizz_id;
