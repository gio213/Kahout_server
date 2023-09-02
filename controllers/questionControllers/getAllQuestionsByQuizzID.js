import connection from "../../config/db.js";

const get_all_questions_by_quizz_id = async (req, res) => {
  const { id } = req.params;
  const value = [id];
  const query = `SELECT * FROM Questions WHERE quizz_id= ?`;
  connection.query(query, value, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Server Error");
      return;
    }

    if (results.length === 0) {
      res
        .status(404)
        .json({ message: "Questions not found with this quizz id" });
    } else {
      res.json(results);
    }
  });
};
export default get_all_questions_by_quizz_id;
