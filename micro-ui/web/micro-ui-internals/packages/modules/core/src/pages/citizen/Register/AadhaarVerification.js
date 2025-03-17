import { Button, CardHeader, CardLabel, CardText, Dropdown, FormStep, LabelFieldPair, TextInput } from "@egovernments/digit-ui-components";
import React, { useEffect, useState } from "react";
import { cities, districts, states } from "./constants";
import AadhaarInput from "./AadhaarInput";
import { FormComposer } from "@egovernments/digit-ui-react-components";

const AadhaarVerification = ({ onSelect, config }) => {
  const changeAadhaar = (e) => {
    setParams({ ...params, aadhaar: e.target.value });
  };

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
      <CardHeader>Enter your Aadhaar Number</CardHeader>
      <CardText>Please enter your 12 Digit Aadhaar number</CardText>
    </FormComposer>
  );
};

export default AadhaarVerification;
