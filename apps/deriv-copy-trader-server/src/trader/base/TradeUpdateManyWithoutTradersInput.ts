/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TradeWhereUniqueInput } from "../../trade/base/TradeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TradeUpdateManyWithoutTradersInput {
  @Field(() => [TradeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TradeWhereUniqueInput],
  })
  connect?: Array<TradeWhereUniqueInput>;

  @Field(() => [TradeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TradeWhereUniqueInput],
  })
  disconnect?: Array<TradeWhereUniqueInput>;

  @Field(() => [TradeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TradeWhereUniqueInput],
  })
  set?: Array<TradeWhereUniqueInput>;
}

export { TradeUpdateManyWithoutTradersInput as TradeUpdateManyWithoutTradersInput };
