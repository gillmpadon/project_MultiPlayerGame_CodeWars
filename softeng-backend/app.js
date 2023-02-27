const express = require("express");
const app = express();
const cors = require("cors");

const accountRouter = require("./routers/accounts");
const scoreRouter = require("./routers/scores");

app.use(cors());
app.use(express.json());

app.use("/api/accounts", accountRouter);
app.use("/api/scores", scoreRouter);

app.get("/", (req, res) => {
  res.status(200).send({ message: "hello" });
});

module.exports = app;
