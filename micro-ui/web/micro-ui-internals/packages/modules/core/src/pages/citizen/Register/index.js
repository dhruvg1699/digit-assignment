import { AppContainer, BackLink, Dropdown, PopUp, Toast } from "@egovernments/digit-ui-components";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { loginSteps } from "./config";
import SelectMobileNumber from "./SelectMobileNumber";
import SelectName from "./SelectName";
import SelectOtp from "./SelectOtp";
import { AdvocateVerification } from "./AdvocateVerification";
import EnterAddress from "./EnterAddress";
import AadhaarVerification from "./AadhaarVerification";
import { states } from "./constants";
import { AdvocateRegistered } from "./AdvocateRegistered";

const TYPE_REGISTER = { type: "register" };
const TYPE_LOGIN = { type: "login" };
const DEFAULT_USER = "digit-user";
const DEFAULT_REDIRECT_URL = `/${window?.contextPath}/citizen`;

/* set citizen details to enable backward compatiable */
const setCitizenDetail = (userObject, token, tenantId) => {
  if (Digit.Utils.getMultiRootTenant()) {
    return;
  }
  let locale = JSON.parse(sessionStorage.getItem("Digit.initData"))?.value?.selectedLanguage;
  localStorage.setItem("Citizen.tenant-id", tenantId);
  localStorage.setItem("tenant-id", tenantId);
  localStorage.setItem("citizen.userRequestObject", JSON.stringify(userObject));
  localStorage.setItem("locale", locale);
  localStorage.setItem("Citizen.locale", locale);
  localStorage.setItem("token", token);
  localStorage.setItem("Citizen.token", token);
  localStorage.setItem("user-info", JSON.stringify(userObject));
  localStorage.setItem("Citizen.user-info", JSON.stringify(userObject));
};

const getFromLocation = (state, searchParams) => {
  return state?.from || searchParams?.from || DEFAULT_REDIRECT_URL;
};

const Register = ({ stateCode, isUserRegistered = true }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isOtpValid, setIsOtpValid] = useState(true);
  const [params, setParmas] = useState(isUserRegistered ? { firstName: "", middleName: "", lastName: "" } : location?.state?.data);
  const [errorTO, setErrorTO] = useState(null);
  const [canSubmitOtp, setCanSubmitOtp] = useState(true);
  const [canSubmitNo, setCanSubmitNo] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [showAadhaarDialog, setShowAadhaarDialog] = useState(false);
  const [stateName, setStateName] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const uploadFile = (e) => {
    console.log("first");
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(e);
  };

  const deletePic = () => {
    setFile(null);
    setImage(null);
  };

  const onSelectVerification = (advocateDetails) => {
    if (!stateName?.name?.length || !file) {
      setError("Please enter all the fields");
    } else {
      console.log(advocateDetails, stateName);
      history.replace(`${path}/name`);
    }
  };

  useEffect(() => {
    let errorTimeout;
    if (error) {
      if (errorTO) {
        clearTimeout(errorTO);
        setErrorTO(null);
      }
      errorTimeout = setTimeout(() => {
        setError("");
      }, 5000);
      setErrorTO(errorTimeout);
    }
    return () => {
      errorTimeout && clearTimeout(errorTimeout);
    };
  }, [error]);

  useEffect(() => {
    if (!user) {
      return;
    }
    Digit.SessionStorage.set("citizen.userRequestObject", user);
    Digit.UserService.setUser(user);
    setCitizenDetail(user?.info, user?.access_token, stateCode);
    const redirectPath = location.state?.from || DEFAULT_REDIRECT_URL;
    if (!Digit.ULBService.getCitizenCurrentTenant(true)) {
      history.replace(`/${window?.contextPath}/citizen/select-location`, {
        redirectBackTo: redirectPath,
      });
    } else {
      history.replace(redirectPath);
    }
  }, [user]);

  const stepItems = useMemo(() =>
    loginSteps.map(
      (step) => {
        const texts = {};
        for (const key in step.texts) {
          texts[key] = t(step.texts[key]);
        }
        return { ...step, texts };
      },
      [loginSteps]
    )
  );

  const handleAadhaarChange = (aadhaar) => {
    setParmas({ ...params, aadhaar });
    console.log(aadhaar);
  };

  const advocateVerificationConfig = [
    {
      body: [
        {
          label: "State of registration",
          name: "registrationState",
          error: "CORE_COMMON_NAME_VALIDMSG",
          populators: (
            <Dropdown
              id="registrationState"
              option={states}
              optionKey="name"
              select={setStateName}
              value={stateName}
              t={t}
              name="registrationState"
            />
          ),
          isMandatory: true,
        },
        {
          type: "number",
          label: "BAR registration number",
          populators: {
            name: "barNumber",
          },
          key: "barNumber",
          error: "CORE_COMMON_NAME_VALIDMSG",
          isMandatory: true,
        },
        {
          type: "component",
          component: "UploadComponent",
          label: "Upload Files",
          key: "files",
          name: "fileUpload",
          isMandatory: true,
          populators: {
            inputs: [{ uploadFile: uploadFile, deletePic: deletePic, file: file, image: image }],
          },
        },
      ],
    },
  ];

  const nameConfig = [
    {
      body: [
        {
          label: "First Name",
          type: "text",
          populators: {
            name: "firstName",
            validation: {
              required: true,
              minlength: 1,
              maxlength: 50,
              // pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
              // pattern: /^(?!\s)[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}(?!\s)$/i
              pattern: "^[A-Za-z]+( [A-Za-z]+)*$",
            },
          },
          error: "CORE_COMMON_NAME_VALIDMSG",
        },
        {
          label: "Middle Name (optional)",
          type: "text",
          error: "CORE_COMMON_NAME_VALIDMSG",
          populators: {
            name: "middleName",
            validation: {
              minlength: 1,
              maxlength: 50,
              // pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
              // pattern: /^(?!\s)[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}(?!\s)$/i
              pattern: "^[A-Za-z]+( [A-Za-z]+)*$",
            },
          },
        },
        {
          label: "Last Name",
          type: "text",
          error: "CORE_COMMON_NAME_VALIDMSG",
          populators: {
            name: "lastName",
            validation: {
              required: true,
              minlength: 1,
              maxlength: 50,
              // pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
              // pattern: /^(?!\s)[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}(?!\s)$/i
              pattern: "^[A-Za-z]+( [A-Za-z]+)*$",
            },
          },
        },
      ],
    },
  ];

  const aadhaarVerificationConfig = [
    {
      body: [
        {
          type: "component",
          component: "AadhaarInput",
          withoutLabel: true,
          key: "aadhaarNo",
          name: "aadhaar",
          populators: {
            inputs: [{ onChange: handleAadhaarChange, value: params.aadhaar }],
          },
        },
      ],
    },
  ];

  const getUserType = () => "citizen" || Digit.UserService.getType();

  const onDismiss = () => {
    setShowDialog(false);
    setShowAadhaarDialog(false);
  };

  const handleOtpChange = (otp) => {
    setParmas({ ...params, otp });
  };

  const handleMobileChange = (event) => {
    const { value } = event.target;
    setParmas({ ...params, mobileNumber: value });
  };

  const selectMobileNumber = async (mobileNumber) => {
    setCanSubmitNo(false);
    setParmas({ ...params, ...mobileNumber });
    console.log(mobileNumber);
    // history.replace(`${path}/otp`);
    setShowDialog(true);
  };

  const selectName = (name) => {
    if (!name.firstName.length || !name.lastName.length) {
      setError("Please enter all the fields");
    } else {
      console.log(name);
      history.replace(`${path}/address`);
    }
    // setCanSubmitName(true);
  };

  const aadhaarVerification = () => {
    if (!params.aadhaar?.length || params.aadhaar?.length < 12) {
      setError("Please enter a valid Aadhaar number");
    } else {
      setShowAadhaarDialog(true);
      console.log(params);
    }
  };

  const selectAddress = () => {
    if (
      !params.address?.length ||
      !params.pincode?.length ||
      !params.state?.length ||
      !params.district?.length ||
      !params.city?.length ||
      !params.locality?.length ||
      !params.doorNo?.length
    ) {
      console.log("Enter Fields");
      setError("Please enter all the fields");
    } else {
      history.replace(`${path}/aadhaar-verification`);
    }
    // setCanSubmitName(true);
  };

  const selectOtp = async () => {
    if (!params.otp || params.otp.length < 6) {
      setIsOtpValid(false);
    } else {
      setIsOtpValid(true);
      console.log(params.otp);
      console.log(path);
      setParmas({ ...params, otp: "" });
      history.replace(`${path}/advocate-verification`);
    }
  };

  const selectAdhaarOtp = async () => {
    if (!params.otp || params.otp.length < 6) {
      setIsOtpValid(false);
    } else {
      setIsOtpValid(true);
      console.log(params.otp);
      console.log(path);
      setParmas({ ...params, otp: "" });
      history.replace(`${path}/advocate-registered`);
    }
  };

  const resendOtp = async () => {
    const { mobileNumber } = params;
    const data = {
      mobileNumber,
      tenantId: stateCode,
      userType: getUserType(),
    };
    if (!isUserRegistered) {
      const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_REGISTER } });
    } else if (isUserRegistered) {
      const [res, err] = await sendOtp({ otp: { ...data, ...TYPE_LOGIN } });
    }
  };

  const sendOtp = async (data) => {
    try {
      const res = await Digit.UserService.sendOtp(data, stateCode);
      return [res, null];
    } catch (err) {
      return [null, err];
    }
  };

  return (
    <div className="citizen-form-wrapper">
      <Switch>
        <AppContainer>
          <Route path={`${path}`} exact>
            <SelectMobileNumber
              onSelect={selectMobileNumber}
              config={stepItems[0]}
              mobileNumber={params.mobileNumber || ""}
              onMobileChange={handleMobileChange}
              canSubmit={canSubmitNo}
              showRegisterLink={isUserRegistered && !location.state?.role}
              t={t}
            />
            {showDialog && (
              <PopUp
                heading={"Verify your Mobile Number"}
                type="default"
                onClose={onDismiss}
                className={"digit-otp-input"}
                onOverlayClick={onDismiss}
              >
                <SelectOtp
                  config={{
                    ...stepItems[1],
                    texts: { ...stepItems[1].texts, cardText: `${stepItems[1].texts.cardText} ${params.mobileNumber || ""}` },
                  }}
                  mobileNumber={params.mobileNumber}
                  onOtpChange={handleOtpChange}
                  onResend={resendOtp}
                  onSelect={selectOtp}
                  otp={params.otp}
                  error={isOtpValid}
                  canSubmit={canSubmitOtp}
                  t={t}
                />
              </PopUp>
            )}
          </Route>
          <Route path={`${path}/advocate-verification`}>
            <AdvocateVerification
              advocateRegistration={onSelectVerification}
              config={advocateVerificationConfig}
              // stateName={stateName}
              // onMobileChange={handleMobileChange}
              // canSubmit={canSubmitNo}
              // showRegisterLink={isUserRegistered && !location.state?.role}
              // t={t}
            />
          </Route>
          <Route path={`${path}/name`}>
            <SelectName config={nameConfig} onSelect={selectName} />
          </Route>
          <Route path={`${path}/address`}>
            <EnterAddress onSelect={selectAddress} t={t} params={params} setParams={setParmas} error />
          </Route>
          <Route path={`${path}/aadhaar-verification`}>
            <AadhaarVerification config={aadhaarVerificationConfig} onSelect={aadhaarVerification} />
            {showAadhaarDialog && (
              <PopUp heading={"Verify your Aadhaar"} type="default" onClose={onDismiss} className={"digit-otp-input"} onOverlayClick={onDismiss}>
                <SelectOtp
                  config={{
                    ...stepItems[1],
                    texts: { ...stepItems[1].texts, cardText: `${stepItems[1].texts.cardText} ${params.mobileNumber || ""}` },
                  }}
                  mobileNumber={params.mobileNumber}
                  onOtpChange={handleOtpChange}
                  onResend={resendOtp}
                  onSelect={selectAdhaarOtp}
                  otp={params.otp}
                  error={isOtpValid}
                  canSubmit={canSubmitOtp}
                  t={t}
                />
              </PopUp>
            )}
          </Route>
          <Route path={`${path}/advocate-registered`}>
            <AdvocateRegistered />
          </Route>
          {error && <Toast type={"error"} label={error} onClose={() => setError(null)} />}
        </AppContainer>
      </Switch>
    </div>
  );
};

export default Register;
