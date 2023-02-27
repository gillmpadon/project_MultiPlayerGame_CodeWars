const scoresRouter = require("express").Router();

scoresRouter.get("/", (req, res) => {
  res.status(200).json({
    scores: [
      {
        accountId: "2020-0-0001",
        score: 10,
      },
      {
        accountId: "2020-0-0002",
        score: 39,
      },
      {
        accountId: "2020-0-0003",
        score: 68,
      },
      {
        accountId: "2020-0-0004",
        score: 2100,
      },
    ],
  });
});

scoresRouter.post("/:id", (req, res) => {
  const id = req.params.id;
  const score = req.body.score;
  console.log(id, score);
  res.status(200).send(`Account with id ${id} has a score of: ${score}`);
});

module.exports = scoresRouter;
