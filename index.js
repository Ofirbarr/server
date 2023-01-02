const express = require("express");
const cors = require("cors");
const { connectToMongo } = require("./dbconfig");
const routes = require("./Routes/Routes");
connectToMongo();

const app = express();

app.set("view engine", "pug");

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.listen(1002, (_) => console.log("all good"));
