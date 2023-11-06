import { Document, model } from "mongoose";
import { MODEL_ACCOUNT } from "../constant/general";
import { accountSchema } from "./schemas/account";

export interface IAccount {
  username: string;
  email: string;
  passwordHash: string;
  stars: number;
  gold: number;
}

export interface AccountDoc extends Document, IAccount {}

export const AccountModel = model(MODEL_ACCOUNT, accountSchema);
