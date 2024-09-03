import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TraderTitle } from "../trader/TraderTitle";
import { UserTitle } from "../user/UserTitle";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="tradeId" source="tradeId" />
        <ReferenceInput source="trader.id" reference="Trader" label="trader">
          <SelectInput optionText={TraderTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
