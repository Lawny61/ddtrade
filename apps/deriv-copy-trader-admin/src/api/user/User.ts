import { JsonValue } from "type-fest";
import { Trade } from "../trade/Trade";

export type User = {
  apiKey: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  traderIds: string | null;
  trades?: Array<Trade>;
  updatedAt: Date;
  username: string;
};
