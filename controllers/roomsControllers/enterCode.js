import connection from "../../config/db.js";

const enterCode =  async (req, res) => {

    const code = req.body.code;
    if (!code) {
        res.json({ message: "Please fill the field" });
      } else {
        connection.query(
          "select id from Rooms WHERE code = ?",
          [code],
          async (error, results) => {
            if (error) {
              console.log(error);
            }

          }
        );
      }
      
  }


export default enterCode;