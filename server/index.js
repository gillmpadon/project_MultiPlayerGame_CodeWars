const express = require("express");
const app = express();
const runCode = require("./pyInt");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  const code = req.body.code;
  console.log(code);
  runCode(code, (result) => {
    console.log(code);
    res.json({ result });
  });
});

app.get("/", (req, res) => {
  runCode("print('Hello World!')", (result) => {
    res.send(result);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
