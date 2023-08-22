import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
try {
  connection.connect();
  console.log("Database connected");
} catch (error) {
  console.log("Database connection failed");
}

export default connection;
