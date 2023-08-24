import connection from "../../config/db.js";

const delete_answer_by_id = (req, res) => {
  const id = req.params.id;
  const value = [id];
  console.log(value);
  const query = `DELETE  FROM Answers WHERE id = ?`;

  connection.query(query, value, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Server Error");
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: "Answer not found" });
    } else {
      res.json({ message: "Answer deleted" });
    }
  });
};

export default delete_answer_by_id;
