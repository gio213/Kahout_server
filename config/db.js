import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.end();

// try {
//   connection.connect();
//   console.log("Database connected");
// } catch (error) {
//   console.log("Database connection failed");
// }

export default connection;
