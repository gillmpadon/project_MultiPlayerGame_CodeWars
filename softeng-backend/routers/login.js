const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const Account = require("../models/account");

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const account = await Account.findOne({ username });
  const passwordCorrect =
    account === null
      ? false
      : await bcrypt.compare(password, account.passwordHash);

  if (!(account && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  response.status(200).send({ username: account.username, name: account.name });
});

module.exports = loginRouter;
