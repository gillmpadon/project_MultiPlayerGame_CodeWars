const accountRouter = require("express").Router();
const bcrypt = require("bcrypt");
const Account = require("../models/account");

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
    stars: 50,
  });

  try {
    const savedAccount = await account.save();
    res.status(201).json(savedAccount);
  } catch (error) {
    console.log(error);
    res
      .status(409)
      .json({ message: `Account with the credentials has been found.` });
  }
});

accountRouter.put("/:un", async (req, res) => {
  const { username, newPassword } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(newPassword, saltRounds);

  try {
    const userUpdate = await Account.findOneAndUpdate(
      { username: username },
      { passwordHash: passwordHash }
    );
    res
      .status(200)
      .json({ message: `${userUpdate.username}'s password has been updated.` });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error has occurred." });
  }
});

module.exports = accountRouter;
