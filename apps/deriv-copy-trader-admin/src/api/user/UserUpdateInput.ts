import { InputJsonValue } from "../../types";
import { TradeUpdateManyWithoutUsersInput } from "./TradeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apiKey?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  traderIds?: string | null;
  trades?: TradeUpdateManyWithoutUsersInput;
  username?: string;
};
