import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";

let app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 3000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`App running on port! ${port}`);
});
