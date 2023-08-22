import jwt from "jsonwebtoken";
const generateAccessToken = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET, {
    expiresIn: "1800s",
  });
};

export default generateAccessToken;
