import connection from "../../config/db.js";

const updateCorrectAnswer = async (req, res) => {
    const id = req.params.id;
    const { correct } = req.body;
    const value = [correct, id];
    console.log(value);
    const query = `UPDATE Answers SET correct = ? WHERE id = ?`;
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
export default updateCorrectAnswer;
