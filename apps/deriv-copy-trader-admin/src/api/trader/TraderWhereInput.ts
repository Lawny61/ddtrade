import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type TraderWhereInput = {
  apiKey?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trades?: TradeListRelationFilter;
};
