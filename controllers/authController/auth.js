import connection from "../../config/db.js";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../config/generateToken.js";
import jwt from "jsonwebtoken";

// sign_post
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

// authenticateToken
const authenticateToken = (req, res, next) => {
  let token = req.headers.cookie;
  console.log(token);
  if (token == null) {
    // can't access this route without a token
    return res.json({ message: "can't access this route without a token" });
  }
  // checl token expiration
  token = token.split("=")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "token is not valid" });
    }
    req.user = user;
    next();
  });
};

// login_post
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
            const refreshToken = generateRefreshToken({ id: id });
            // send cookie to cookie storage
            res.cookie("token", token, {
              httpOnly: true,
              maxAge: 60 * 60 * 24 * 1000, //
            });
            res.status(200).json({
              token: token,
              refreshToken: refreshToken,
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

// login_get
const login_get = (req, res) => {
  const user = req.user;
  res.json({ message: "login successful", user: user });
};
// logout_delete
const logout_delete = async (req, res) => {
  const token = req.headers.cookie;
  console.log(token);
  if (token) {
    res.clearCookie("token");
    res.json({ message: "logout successful" });
  } else {
    // logout unsuccsessful
    res.json({ message: "logout unsuccsessful" });
  }
};

export { sign_post, login_post, login_get, authenticateToken, logout_delete };
