import { AccountDoc } from "../models/account";
import { getAllAccounts, createAccount } from "../services/accounts";
import { Request, Response } from "express";
import {
  responseInternalServerError,
  responseSuccess,
  responseBadRequest,
  responseCreated,
} from "../utils/response";
import { isString } from "../utils/validate";
import { CreateAccountParameter } from "../interface/service";

export const getAllAccountsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const accounts: AccountDoc[] = await getAllAccounts();
    return responseSuccess(res, accounts);
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    return responseInternalServerError(res, errorMessage, error);
  }
};

export const createAccountController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body as CreateAccountParameter;

    if (!(username && email && password)) {
      throw new TypeError("Username, email, and password is required");
    }

    if (!isString(username)) throw new TypeError("Username must be a string");
    if (!isString(email)) throw new TypeError("Email must be a string");
    if (!isString(password)) throw new TypeError("Password must be a string");

    if (password.length < 8)
      throw new TypeError("Password must be at least of length 8");

    const savedAccount = await createAccount({ username, email, password });
    return responseCreated(res, savedAccount);
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof TypeError) {
      errorMessage += error.message;
      return responseBadRequest(res, errorMessage);
    }

    return responseInternalServerError(res, errorMessage, error);
  }
};
