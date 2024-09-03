import { TradeCreateNestedManyWithoutTradersInput } from "./TradeCreateNestedManyWithoutTradersInput";

export type TraderCreateInput = {
  apiKey?: string | null;
  name?: string | null;
  trades?: TradeCreateNestedManyWithoutTradersInput;
};
