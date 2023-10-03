const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  player1: {
    type: String,
    required: true,
    unique: true,
  },
  player2: {
    type: String,
    required: true,
    unique: true,
  },
  win: {
    type: String,
  },
});
