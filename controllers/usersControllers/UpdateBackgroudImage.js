import connection from "../../config/db.js";
const updateBackgroudImage = (req,res) =>{
    const id = req.params.id; 
    const newFile = req.body.newFile;
    const values = [newFile,id, id];
    const query = 'UPDATE Users SET backgroundImage = ? WHERE id = ?';
    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).json({ message: 'BackgroudImage updated successfully' });
    });
};
export default updateBackgroudImage;