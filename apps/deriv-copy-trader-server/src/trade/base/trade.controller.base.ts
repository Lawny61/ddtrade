/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TradeService } from "../trade.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TradeCreateInput } from "./TradeCreateInput";
import { Trade } from "./Trade";
import { TradeFindManyArgs } from "./TradeFindManyArgs";
import { TradeWhereUniqueInput } from "./TradeWhereUniqueInput";
import { TradeUpdateInput } from "./TradeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TradeControllerBase {
  constructor(
    protected readonly service: TradeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trade })
  @nestAccessControl.UseRoles({
    resource: "Trade",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTrade(@common.Body() data: TradeCreateInput): Promise<Trade> {
    return await this.service.createTrade({
      data: {
        ...data,

        trader: data.trader
          ? {
              connect: data.trader,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,
        timestamp: true,
        tradeId: true,

        trader: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trade] })
  @ApiNestedQuery(TradeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trade",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trades(@common.Req() request: Request): Promise<Trade[]> {
    const args = plainToClass(TradeFindManyArgs, request.query);
    return this.service.trades({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        timestamp: true,
        tradeId: true,

        trader: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trade })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trade",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trade(
    @common.Param() params: TradeWhereUniqueInput
  ): Promise<Trade | null> {
    const result = await this.service.trade({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        timestamp: true,
        tradeId: true,

        trader: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trade })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trade",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTrade(
    @common.Param() params: TradeWhereUniqueInput,
    @common.Body() data: TradeUpdateInput
  ): Promise<Trade | null> {
    try {
      return await this.service.updateTrade({
        where: params,
        data: {
          ...data,

          trader: data.trader
            ? {
                connect: data.trader,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,
          timestamp: true,
          tradeId: true,

          trader: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trade })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trade",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTrade(
    @common.Param() params: TradeWhereUniqueInput
  ): Promise<Trade | null> {
    try {
      return await this.service.deleteTrade({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          timestamp: true,
          tradeId: true,

          trader: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
