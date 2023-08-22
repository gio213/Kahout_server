import connection from "../config/db.js";
import bcrypt from "bcrypt";

const sign_post = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.json({ message: "Please fill in all fields" });
  } else {
    connection.query(
      "select username from becode_kahoot_db.Users WHERE username = ?",
      [username],
      async (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.length > 0) {
          res.json({ message: "That username is already in use" });
          console.log("That username is already in use");
        }
      }
    );

    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    connection.query(
      "INSERT INTO becode_kahoot_db.Users SET ? ",
      {
        username: username,
        password: hashedPassword,
      },
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          res.json({ message: "User registered" });
        }
      }
    );
  }
};

export default sign_post;
