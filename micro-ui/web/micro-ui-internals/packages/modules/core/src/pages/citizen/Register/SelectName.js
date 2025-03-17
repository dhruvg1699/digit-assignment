import { Button, CardHeader, CardLabel, CardText, FormStep, LabelFieldPair, TextInput } from "@egovernments/digit-ui-components";
import { FormComposer } from "@egovernments/digit-ui-react-components";
import React from "react";

const SelectName = ({ config, onSelect }) => {
  return (
    <FormComposer
      onSubmit={onSelect}
      noBoxShadow
      inline
      submitInForm
      config={config}
      cardStyle={{ maxWidth: "35rem", margin: "auto" }}
      label={"Continue"}
    >
      <CardHeader>Advocate Verification</CardHeader>
      <CardText>To ensure the authenticity of your profile, please provide the following details for us to verify</CardText>
    </FormComposer>
  );
};

export default SelectName;
