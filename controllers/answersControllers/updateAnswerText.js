import connection from "../../config/db.js";

const update_answer_text_by_id = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { text } = req.body;

  const query = `UPDATE Answers SET text = ? WHERE id = ?`;
  connection.query(query, [text, id], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ message: "Server Error" });
      return;
    } else {
      res.status(200).json({ message: "Answer updated" });
    }
  });
};
export default update_answer_text_by_id;
