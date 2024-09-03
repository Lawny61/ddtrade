import { TradeUpdateManyWithoutTradersInput } from "./TradeUpdateManyWithoutTradersInput";

export type TraderUpdateInput = {
  apiKey?: string | null;
  name?: string | null;
  trades?: TradeUpdateManyWithoutTradersInput;
};
