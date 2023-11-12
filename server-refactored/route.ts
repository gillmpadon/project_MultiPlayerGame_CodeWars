/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import {
  getAllAccountsController,
  createAccountController,
  loginController,
  updateStarsController,
} from "./controllers/accounts";

const route = () => {
  const router: Router = Router();

  router.get("/account", getAllAccountsController);
  router.post("/create/account", createAccountController);
  router.post("/login", loginController);
  router.put("/update/star", updateStarsController);

  return router;
};

export default route;
