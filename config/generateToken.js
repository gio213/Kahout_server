import jwt from "jsonwebtoken";
const generateAccessToken = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET, {
    expiresIn: "1800s", // 30 minutes
  });
};

const generateRefreshToken = (id) => {
  return jwt.sign(id, process.env.REFRESH_TOKEN, {
    expiresIn: "7d",
  });
};

export { generateAccessToken, generateRefreshToken };
