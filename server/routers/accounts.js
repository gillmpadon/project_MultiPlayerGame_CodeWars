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

accountRouter.put("/:email", async (req, res) => {
  const { email } = req.body;

  try {
    const emailReq = await Account.findOne({ email: email });
    res.status(200).json({
      message: `A link for password update has been sent to ${emailReq.username}'s email.`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error has occurred." });
  }
});

accountRouter.put("/gold", async (req, res) => {
  const { username, didWin, gold } = req.body;
  try {
    const starUpdate = didWin ? Number(gold) + 300 : Number(gold);
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
module.exports = accountRouter;
