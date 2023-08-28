

import connection from "../../config/db.js";

const getCorrectAnswers = async (req, res) => {
    const id = req.params.id;
    const value = [id];
    const query = `SELECT * FROM Answers WHERE question_id = ? and correct = 1;`;

    connection.query(query, value, (error, results) => {
        if (error) {
            console.error("Error executing SQL query:", error);
            res.status(500).send("Server Error");
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ message: "Answers not found" });
        } else {
            res.json(results);
        }
    });
};

export default getCorrectAnswers;
