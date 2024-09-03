import { Trade } from "../trade/Trade";

export type Trader = {
  apiKey: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  trades?: Array<Trade>;
  updatedAt: Date;
};
