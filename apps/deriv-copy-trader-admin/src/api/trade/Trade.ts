import { Trader } from "../trader/Trader";
import { User } from "../user/User";

export type Trade = {
  amount: number | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  tradeId: string | null;
  trader?: Trader | null;
  updatedAt: Date;
  user?: User | null;
};
