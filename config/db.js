import mysql from "mysql2";
import dotenv from "dotenv";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
dotenv.config({ path: "./.env" });
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected");
  }
});

connection.end((err) => {
  if (err) {
    console.error("Error closing database connection:", err.message);
  } else {
    console.log("Database connection closed");
  }
});
export default connection;
