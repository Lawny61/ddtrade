import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  tradeId?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
