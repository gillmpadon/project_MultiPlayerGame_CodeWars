const accountRouter = require("express").Router();

let test_data = {
  accounts: [
    {
      username: "Dazai",
      email: "test1@gmail.com",
    },
    {
      username: "heyy",
      email: "test1@gmail.com",
    },
    {
      username: "hiii",
      email: "test1@gmail.com",
    },
    {
      username: "ikh4wlh4nGsh4p4tN4",
      email: "test1@gmail.com",
    },
  ],
};

accountRouter.get("/", (req, res) => {
  res.status(200).json(test_data);
});

accountRouter.post("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).send(`Account with ${id} has been added`);
});

module.exports = accountRouter;
