import connection from "../../config/db.js";

const createAnswer = (req, res) => {
  const { text, question_id, correct } = req.body;
  const values = [text, question_id, correct];
  const query =
    "INSERT INTO Answers (text, question_id, correct) VALUES (?, ?, ?)";
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Server Error");
      return;
    }
    res.status(200).json({ message: "Answer created", id: results.insertId });
  });
};

export default createAnswer;
