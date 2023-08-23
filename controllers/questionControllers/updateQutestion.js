import db from "../../config/db.js";

const question_update = async (req, res) => {
  const { text, type, time_limit, multi_select, quizz_id } = req.body;
  const { id } = req.params;
  const query = `UPDATE Questions SET text='${text}', type='${type}', time_limit='${time_limit}', multi_select='${multi_select}', quizz_id='${quizz_id}' WHERE id=${id}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: "Question updated" });
  });
};
export default question_update;
