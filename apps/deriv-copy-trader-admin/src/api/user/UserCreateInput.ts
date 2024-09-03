import { InputJsonValue } from "../../types";
import { TradeCreateNestedManyWithoutUsersInput } from "./TradeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  apiKey?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  traderIds?: string | null;
  trades?: TradeCreateNestedManyWithoutUsersInput;
  username: string;
};
