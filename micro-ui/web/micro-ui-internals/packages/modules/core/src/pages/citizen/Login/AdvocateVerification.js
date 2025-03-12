import { Button, CardHeader, CardLabel, CardText, Dropdown, LabelFieldPair, TextInput } from "@egovernments/digit-ui-components";
import React from "react";

export const AdvocateVerification = ({ t, stateName, setStateName, changeBARRegistration, BARRegistration, onSelect }) => {
  const states = [
    { name: "Andhra Pradesh", code: "AP" },
    { name: "Arunachal Pradesh", code: "AR" },
    { name: "Assam", code: "AS" },
    { name: "Bihar", code: "BR" },
    { name: "Chhattisgarh", code: "CG" },
    { name: "Goa", code: "GA" },
    { name: "Gujarat", code: "GJ" },
    { name: "Haryana", code: "HR" },
    { name: "Himachal Pradesh", code: "HP" },
    { name: "Jammu and Kashmir", code: "JK" },
    { name: "Jharkhand", code: "JH" },
    { name: "Karnataka", code: "KA" },
    { name: "Kerala", code: "KL" },
    { name: "Madhya Pradesh", code: "MP" },
    { name: "Maharashtra", code: "MH" },
    { name: "Manipur", code: "MN" },
    { name: "Meghalaya", code: "ML" },
    { name: "Mizoram", code: "MZ" },
    { name: "Nagaland", code: "NL" },
    { name: "Odisha", code: "OD" },
    { name: "Punjab", code: "PB" },
    { name: "Rajasthan", code: "RJ" },
    { name: "Sikkim", code: "SK" },
    { name: "Tamil Nadu", code: "TN" },
    { name: "Telangana", code: "TS" },
    { name: "Tripura", code: "TR" },
    { name: "Uttarakhand", code: "UK" },
    { name: "Uttar Pradesh", code: "UP" },
    { name: "West Bengal", code: "WB" },
    { name: "Andaman and Nicobar Islands", code: "AN" },
    { name: "Chandigarh", code: "CH" },
    { name: "Dadra and Nagar Haveli", code: "DN" },
    { name: "Daman and Diu", code: "DD" },
    { name: "Delhi", code: "DL" },
    { name: "Lakshadweep", code: "LD" },
    { name: "Puducherry", code: "PY" },
  ];

  return (
    <div className="form-component">
      <CardHeader>Advocate Verification</CardHeader>
      <div className="form-support-text">
        <CardText className="form-support-text-label">
          To ensure the authenticity of your profile, please provide the following details for us to verify
        </CardText>
      </div>
      <LabelFieldPair>
        <CardLabel>State of registration</CardLabel>
        <Dropdown
          style={{ width: "40rem", fontSize: "1rem" }}
          option={states}
          select={setStateName}
          value={stateName}
          optionKey="name"
          t={t}
          name="gender"
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <CardLabel>BAR registration number</CardLabel>
        <TextInput className="text-indent-xl" onChange={changeBARRegistration} value={BARRegistration} />
      </LabelFieldPair>
      <Button primary backgroundColor={"#007E7E"} size="large" label="Continue" onClick={onSelect} />{" "}
    </div>
  );
};
