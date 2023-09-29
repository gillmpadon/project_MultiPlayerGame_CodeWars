const accountRouter = require("express").Router();
const bcrypt = require("bcrypt");
const Account = require("../models/account");

accountRouter.get("/", async (req, res) => {
  const accounts = await Account.find({});
  res.status(200).json(accounts);
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

accountRouter.put("/star", async (req, res) => {
  const { username, didWin, stars } = req.body;
  try {
    const starUpdate = didWin ? Number(stars) + 1 : Number(stars) - 1;
    const user = await Account.findOneAndUpdate(
      { username: username },
      { stars: starUpdate },
      {
        new: true,
      }
    );
    console.log(user);
    res.status(200).json({
      message: `${user.username} has ${user.stars}`,
      account: {
        username: user.username,
        email: user.email,
        stars: user.stars,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "An error has occured.", error: e });
  }
});

accountRouter.put("/pass/:un", async (req, res) => {
  const { password, username } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash("password", saltRounds);
  try {
    const userUpdate = await Account.findOneAndUpdate(
      { username: username },
      { passwordHash: passwordHash },
      { new: true } 
    );
    res
      .status(200)
      .json({ message: `${userUpdate.username}'s password has been updated.` });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error has occurred." });
  }
});

accountRouter.put("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const emailReq = await Account.findOne({ email });
    res.status(200).json({
      username: `${emailReq.username}`,
    });
  } catch (error) {
    res.status(400).json({ message: "An error has occurred." });
  }
});
module.exports = accountRouter;
