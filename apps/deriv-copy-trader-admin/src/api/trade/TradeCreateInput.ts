import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeCreateInput = {
  amount?: number | null;
  timestamp?: Date | null;
  tradeId?: string | null;
  trader?: TraderWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
