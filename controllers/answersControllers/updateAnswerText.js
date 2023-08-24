import connection from "../../config/db.js";

const update_answer_by_id = async (req, res) => {
  const id = req.params.id;
  const { text, correct } = req.body;
  console.log(req.body);
  const value = [text, correct, id];
  console.log(value);
  const query = `UPDATE Answers SET text = ?, correct = ? WHERE id = ?`;

  connection.query(query, value, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Server Error");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: "Answer not found" });
    } else {
      res.json({ message: "Answer updated" });
    }
  });
};
export default update_answer_by_id;
