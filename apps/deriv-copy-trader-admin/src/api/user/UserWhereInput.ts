import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type UserWhereInput = {
  apiKey?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  traderIds?: StringNullableFilter;
  trades?: TradeListRelationFilter;
  username?: StringFilter;
};
