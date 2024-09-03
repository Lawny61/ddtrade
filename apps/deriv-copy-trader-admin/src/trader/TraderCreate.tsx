import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradeTitle } from "../trade/TradeTitle";

export const TraderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="trades"
          reference="Trade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
