import { AccountDoc } from "../models/account";
import {
  getAllAccounts,
  createAccount,
  getUniqueAccount,
  updateAccountStars,
} from "../services/accounts";
import {
  responseInternalServerError,
  responseSuccess,
  responseBadRequest,
  responseCreated,
  responseUnauthorized,
} from "../utils/response";
import { isString } from "../utils/validate";
import { CustomBodyRequest } from "../interface/controller";
import {
  CreateAccountParameter,
  LoginParameter,
  UpdateAccountStarsParameter,
} from "../interface/service";
import { INVALID_CREDENTIALS } from "../constant/general";

import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";

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

export const createAccountController = async (
  req: CustomBodyRequest<CreateAccountParameter>,
  res: Response
) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      throw new TypeError("Username, email, and password is required");
    }

    if (!isString(username)) throw new TypeError("Username must be a string");
    if (!isString(email)) throw new TypeError("Email must be a string");
    if (!isString(password)) throw new TypeError("Password must be a string");

    if (password.length < 8)
      throw new TypeError("Password must be at least of length 8");

    const savedAccount = await createAccount({ username, email, password });
    console.log(savedAccount);
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

export const loginController = async (
  req: CustomBodyRequest<LoginParameter>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    if (!isString(username)) throw new TypeError("Username must be a string.");
    if (!isString(password)) throw new TypeError("Password must be a string.");

    const account = await getUniqueAccount({ username });
    const areCredentialsCorrect =
      account === null
        ? false
        : await bcrypt.compare(password, account.passwordHash);
    if (account === null) {
      throw new Error("Account does not exist");
    }
    if (!areCredentialsCorrect) {
      throw new Error("Incorrect Username or Password");
    }

    const userForToken = {
      username,
    };

    const SECRET = process.env.SECRET as Secret;

    const token = jwt.sign(userForToken, SECRET, {
      expiresIn: 60 * 5,
    });

    const accountData = {
      username: account.username,
      email: account.email,
      stars: account.stars,
      gold: account.gold,
      hasStarProtection: account.hasStarProtection,
      token,
    };

    console.log(accountData);

    return responseSuccess(res, accountData);
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof TypeError) {
      errorMessage += error.message;
      return responseBadRequest(res, errorMessage);
    }

    if (error instanceof Error) {
      return responseUnauthorized(res, INVALID_CREDENTIALS, error);
    }

    return responseInternalServerError(res, errorMessage, error);
  }
};

export const updateStarsController = async (
  req: CustomBodyRequest<UpdateAccountStarsParameter>,
  res: Response
) => {
  try {
    const { username, didWin, hasStarProtection, stars } = req.body;
    const account = await updateAccountStars({
      username,
      didWin,
      hasStarProtection,
      stars,
    });
    if (account === null) {
      throw new Error("Account does not exist");
    }

    return responseSuccess(res, account);
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof TypeError) {
      errorMessage += error.message;
      return responseBadRequest(res, errorMessage);
    }

    if (error instanceof Error) {
      return responseUnauthorized(res, INVALID_CREDENTIALS, error);
    }

    return responseInternalServerError(res, errorMessage, error);
  }
};
