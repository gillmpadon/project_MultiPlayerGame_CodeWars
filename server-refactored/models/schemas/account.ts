import { Schema } from "mongoose";

export const accountSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: String,
  stars: Number,
  gold: Number,
});
