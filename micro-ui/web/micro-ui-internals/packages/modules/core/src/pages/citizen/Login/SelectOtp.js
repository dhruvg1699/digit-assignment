import { CardText, CardLabelError, FormStep, Button } from "@egovernments/digit-ui-components";
import React, { Fragment, useState } from "react";
import useInterval from "../../../hooks/useInterval";
import { OTPInput } from "@egovernments/digit-ui-react-components";

const SelectOtp = ({ config, otp, mobileNumber, onOtpChange, onResend, onSelect, t, error, userType = "citizen", canSubmit }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    timeLeft > 0 ? 1000 : null
  );

  const handleResendOtp = () => {
    timeLeft === 0 ? setTimeLeft(30) : null;
  };

  if (userType === "employee") {
    return (
      <Fragment>
        <OTPInput length={6} onChange={onOtpChange} value={otp} />
        {timeLeft > 0 ? (
          <CardText>{`${t("CS_RESEND_ANOTHER_OTP")} ${timeLeft} ${t("CS_RESEND_SECONDS")}`}</CardText>
        ) : (
          <p className="card-text-button resend-otp" onClick={handleResendOtp}>
            {t("CS_RESEND_OTP")}
          </p>
        )}
        {!error && <CardLabelError>{t("CS_INVALID_OTP")}</CardLabelError>}
      </Fragment>
    );
  }

  return (
    <div>
      <div className="dialog-sub-header">{`Enter the OTP sent to ${mobileNumber}`}</div>
      <OTPInput length={6} onChange={onOtpChange} value={otp} />
      <div className="card-text-button">
        Request a new OTP in 00:{timeLeft < 10 ? `0${timeLeft}` : `${timeLeft}`}
        <p className={timeLeft === 0 ? "resend-otp" : "resend-otp-disabled"} onClick={handleResendOtp}>
          {t("CS_RESEND_OTP")}
        </p>
      </div>
      {!error && <CardLabelError>{t("CS_INVALID_OTP")}</CardLabelError>}
      <Button className="otp-verification" primary backgroundColor={"#007E7E"} size="large" label="Verify" onClick={onSelect} />{" "}
    </div>
  );
};

export default SelectOtp;
