import connection from "../../config/db.js";
const getBackgroudImage = (req,res) =>{
    const id = req.params.id; 
    const value = [id];
    const query = 'SELECT backgroundImage FROM Users WHERE id = ?';
    connection.query(query, value, (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Server Error');
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ message: 'backgroundmage not found' });
        } else {
            const backgroundImage = results[0];
            res.json(backgroundImage);
        }
    });
}
export default getBackgroudImage;