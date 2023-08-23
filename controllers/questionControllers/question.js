import db from "../../config/db.js";

const question_post = async (req, res) => {
  const { text, type, time_limit, multi_select, quizz_id } = req.body;
  const query = `INSERT INTO Questions (text, type, time_limit, multi_select, quizz_id ) VALUES ('${text}', '${type}', '${time_limit} ', '${multi_select}', '${quizz_id}')`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: "Question  created" });
  });
};

export default question_post;
