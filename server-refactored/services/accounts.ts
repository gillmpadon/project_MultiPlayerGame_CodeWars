import { AccountDoc, IAccount, AccountModel } from "../models/account";
import {
  CreateAccountParameter,
  BaseAccountRequest,
} from "../interface/service";
import bcrypt from "bcrypt";

export const getAllAccounts = async (): Promise<AccountDoc[]> => {
  return AccountModel.find({});
};

export const createAccount = async ({
  username,
  email,
  password,
}: CreateAccountParameter): Promise<AccountDoc> => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const data: IAccount = {
    username,
    email,
    passwordHash,
    gold: 100,
    stars: 50,
  };

  const account = new AccountModel(data);
  const savedAccount = await account.save();

  return savedAccount;
};

export const getUniqueAccount = async ({
  username,
}: BaseAccountRequest): Promise<AccountDoc | null> => {
  const account = await AccountModel.findOne({ username });
  return account;
};
