import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import cors from "cors";

let app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Credentials: true,
};

const port = process.env.PORT || 3000;

app.use("/api", router);
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`App running on port! ${port}`);
});
