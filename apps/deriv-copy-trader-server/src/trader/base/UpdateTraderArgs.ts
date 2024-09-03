/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TraderWhereUniqueInput } from "./TraderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TraderUpdateInput } from "./TraderUpdateInput";

@ArgsType()
class UpdateTraderArgs {
  @ApiProperty({
    required: true,
    type: () => TraderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TraderWhereUniqueInput)
  @Field(() => TraderWhereUniqueInput, { nullable: false })
  where!: TraderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TraderUpdateInput,
  })
  @ValidateNested()
  @Type(() => TraderUpdateInput)
  @Field(() => TraderUpdateInput, { nullable: false })
  data!: TraderUpdateInput;
}

export { UpdateTraderArgs as UpdateTraderArgs };
