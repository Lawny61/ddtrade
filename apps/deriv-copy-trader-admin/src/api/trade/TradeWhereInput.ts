import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TraderWhereUniqueInput } from "../trader/TraderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  tradeId?: StringNullableFilter;
  trader?: TraderWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
