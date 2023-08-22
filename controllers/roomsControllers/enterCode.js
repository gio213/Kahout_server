import connection from "../../config/db.js";


const enterCode = async (req, res, next) => {
  const code = req.body.code;

  if (!code) {
      res.json({ message: "Please fill the field" });
  } else {
      connection.query(
          "SELECT id FROM Rooms WHERE code = ?",
          [code],
          (error, results) => {
              if (error) {
                  console.log(error);
                  res.status(500).json({ message: "Server Error" });
                  return;
              }

              if (results.length > 0) {
                  const roomId = results[0].id;
                  res.status(200).json({ roomId });
              } else {
                  res.status(404).json({ message: "Room not found" });
              }

              next();
          }
      );
  }
};


export default enterCode;