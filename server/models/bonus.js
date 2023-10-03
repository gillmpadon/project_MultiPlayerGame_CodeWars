const mongoose = require("mongoose");

const bonusSchema = new mongoose.Schema({
  bonusName: {
    type: String,
    required: true,
    unique: true,
  },
  bonusId: {
    type: String,
    required: true,
    unique: true,
  },
  bonusEffect: {
    type: String,
    required: true,
    unique: true,
  },
});
