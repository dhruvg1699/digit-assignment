import { Button, CardHeader, CardLabel, CardText, Dropdown, FormStep, LabelFieldPair, TextInput } from "@egovernments/digit-ui-components";
import React, { useEffect, useState } from "react";
import { cities, districts, states } from "./constants";

const EnterAddress = ({ t, params, setParams, onSelect }) => {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  useEffect(() => {
    setParams({ ...params, state: state?.name });
  }, [state]);

  useEffect(() => {
    setParams({ ...params, city: city?.name });
  }, [city]);

  useEffect(() => {
    setParams({ ...params, district: district?.name });
  }, [district]);

  const changeAddress = (e) => {
    setParams({ ...params, address: e.target.value });
  };

  const changePincode = (e) => {
    if (e.target.value.length <= 6) {
      setParams({ ...params, pincode: e.target.value });
    }
  };

  const changeLocality = (e) => {
    setParams({ ...params, locality: e.target.value });
  };

  const changeDoorNo = (e) => {
    setParams({ ...params, doorNo: e.target.value });
  };

  return (
    <div className="form-component">
      <CardHeader>Enter your address</CardHeader>{" "}
      <TextInput className="address-field-without-label" onChange={changeAddress} value={params.address} placeholder={"building, street, or area"} />
      <div className="multiple-inputs-row">
        <div className="half-length-input">
          <LabelFieldPair>
            <CardLabel>{"Pincode"}</CardLabel>
            <TextInput type="number" onChange={changePincode} value={params.pincode} />
          </LabelFieldPair>
        </div>
        <div className="half-length-input">
          <LabelFieldPair>
            <CardLabel>State</CardLabel>
            <Dropdown option={states} select={setState} value={state} optionKey="name" t={t} name="state" />
          </LabelFieldPair>
        </div>
      </div>
      <div className="multiple-inputs-row">
        <div className="half-length-input">
          <LabelFieldPair>
            <CardLabel>Districts</CardLabel>
            <Dropdown
              option={state !== null ? districts.filter((district) => district.state === state.name)[0].districts : null}
              select={setDistrict}
              value={district}
              optionKey="name"
              t={t}
              name="city"
            />
          </LabelFieldPair>
        </div>
        <div className="half-length-input">
          <LabelFieldPair>
            <CardLabel>City / Town</CardLabel>
            <Dropdown
              option={state !== null ? cities.filter((city) => city.state === state.name)[0].cities : null}
              select={setCity}
              value={city}
              optionKey="name"
              t={t}
              name="city"
            />
          </LabelFieldPair>
        </div>
      </div>
      <div className="multiple-inputs-row">
        <div className="half-length-input">
          <LabelFieldPair>
            <CardLabel>{"Locality / Street Name / Area"}</CardLabel>
            <TextInput onChange={changeLocality} value={params.locality} />
          </LabelFieldPair>
        </div>
        <div className="half-length-input">
          <LabelFieldPair>
            <CardLabel>Door Number</CardLabel>
            <TextInput onChange={changeDoorNo} value={params.doorNo} />
          </LabelFieldPair>
        </div>
      </div>
      <Button style={{ marginTop: 0 }} primary backgroundColor={"#007E7E"} size="large" label="Continue" onClick={onSelect} />{" "}
    </div>
  );
};

export default EnterAddress;
