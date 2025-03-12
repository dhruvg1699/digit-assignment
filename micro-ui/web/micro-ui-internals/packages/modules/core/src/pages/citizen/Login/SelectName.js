import { Button, CardHeader, CardLabel, CardText, FormStep, LabelFieldPair, TextInput } from "@egovernments/digit-ui-components";
import React from "react";

const SelectName = ({ changeFirstName, firstName, changeMiddleName, middleName, changeLastName, lastName, onSelect }) => {
  return (
    <div className="form-component">
      <CardHeader>Enter your name as per official documents</CardHeader>
      <div className="form-support-text">
        <CardText className="form-support-text-label">This is to ensure seamless verification and maintain compliance with official records</CardText>
      </div>
      <LabelFieldPair>
        <CardLabel>First Name</CardLabel>
        <TextInput onChange={changeFirstName} value={firstName} />
      </LabelFieldPair>
      <LabelFieldPair>
        <CardLabel>{"Middle Name (optional)"}</CardLabel>
        <TextInput onChange={changeMiddleName} value={middleName} />
      </LabelFieldPair>
      <LabelFieldPair>
        <CardLabel>Last Name</CardLabel>
        <TextInput onChange={changeLastName} value={lastName} />
      </LabelFieldPair>
      <Button primary backgroundColor={"#007E7E"} size="large" label="Continue" onClick={onSelect} />{" "}
    </div>
  );
};

export default SelectName;
