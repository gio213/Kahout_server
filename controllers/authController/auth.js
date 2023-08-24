import connection from "../../config/db.js";
import bcrypt from "bcrypt";
import generateAccessToken from "../../config/generateToken.js";
import jwt from "jsonwebtoken";

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

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
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

const login_get = (req, res) => {
  res.json("login granted");
};

export { sign_post, login_post, login_get, authenticateToken };
