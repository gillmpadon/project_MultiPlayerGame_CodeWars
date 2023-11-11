import mongoose from "mongoose";
import { STATUS_DB_CONNECTED } from "./constant/general";

export default async function initDB(dbUri: string) {
  const connectionStatus = await mongoose
    .connect(dbUri, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => STATUS_DB_CONNECTED)
    .catch((error) => {
      throw `DB Error ${error}`;
    });

  return connectionStatus;
}
