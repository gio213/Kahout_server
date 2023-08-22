import connection from "../config/db.js";
import bcrypt from "bcrypt";
import generateAccessToken from "../config/generateToken.js";

const sign_post = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.json({ message: "Please fill in all fields" });
  } else {
    connection.query(
      "select username from Users WHERE username = ?",
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
      "INSERT INTO Users SET ? ",
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

const login_post = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Please fill in all fields" });
  } else {
    connection.query(
      "select * from Users WHERE username = ?",
      [username],
      async (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.length > 0) {
          const isMatch = await bcrypt.compare(password, results[0].password);
          if (isMatch) {
            const id = results[0].id;
            const token = generateAccessToken({ id: id });
            res.status(200).json({
              message: "User logged in",
              token: token,
            });
          } else {
            res.status(400).json({ message: "Password is incorrect" });
          }
        } else {
          res.status(400).json({ message: "User does not exist" });
        }
      }
    );
  }
};

export { sign_post, login_post };
