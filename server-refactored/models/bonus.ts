import { Document, model } from "mongoose";
import { MODEL_BONUS } from "../constant/general";
import { bonusSchema } from "./schemas/bonus";

export interface IBonus {
  bonusName: string;
  bonusId: string;
  bonusEffect: string;
}

export interface BonusDoc extends Document, IBonus {}
export const BonusModel = model<BonusDoc>(MODEL_BONUS, bonusSchema);
