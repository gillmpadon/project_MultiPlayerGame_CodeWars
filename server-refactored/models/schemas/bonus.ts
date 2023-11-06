import { Schema } from "mongoose";

export const bonusSchema: Schema = new Schema({
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
