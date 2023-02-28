const accountRouter = require("express").Router();
const bcrypt = require("bcrypt");
const Account = require("../models/account");

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

accountRouter.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const account = new Account({
    username,
    email,
    passwordHash,
  });

  try {
    const savedAccount = await account.save();
    res.status(201).json(savedAccount);
  } catch (error) {
    console.log(error);
    res
      .status(409)
      .json({ message: `Account with username ${username} has been found.` });
  }
});

module.exports = accountRouter;
