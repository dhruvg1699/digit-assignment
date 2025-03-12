import { AppContainer, BackLink, PopUp, Toast } from "@egovernments/digit-ui-components";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { loginSteps } from "./config";
import SelectMobileNumber from "./SelectMobileNumber";
import SelectName from "./SelectName";
import SelectOtp from "./SelectOtp";
import { AdvocateVerification } from "./AdvocateVerification";

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

const Login = ({ stateCode, isUserRegistered = true }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isOtpValid, setIsOtpValid] = useState(true);
  const [tokens, setTokens] = useState(null);
  const [params, setParmas] = useState(isUserRegistered ? { firstName: "", middleName: "", lastName: "" } : location?.state?.data);
  const [errorTO, setErrorTO] = useState(null);
  const searchParams = Digit.Hooks.useQueryParams();
  const [canSubmitName, setCanSubmitName] = useState(false);
  const [canSubmitOtp, setCanSubmitOtp] = useState(true);
  const [canSubmitNo, setCanSubmitNo] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [stateName, setStateName] = useState("");

  const changeBARRegistration = (e) => {
    setParmas({ ...params, barRegistration: e.target.value });
  };

  const changeFirstName = (e) => {
    setParmas({ ...params, firstName: e.target.value });
  };

  const changeMiddleName = (e) => {
    setParmas({ ...params, middleName: e.target.value });
  };

  const changeLastName = (e) => {
    setParmas({ ...params, lastName: e.target.value });
  };

  const onSelectVerification = () => {
    history.replace(`${path}/name`);
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

  const getUserType = () => "citizen" || Digit.UserService.getType();

  const onDismiss = () => {
    setShowDialog(false);
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

  const selectName = async (name) => {
    console.log(`${params.firstName} ${params.middleName ? params.middleName + " " : ""}${params.lastName}`);
    // setCanSubmitName(true);
  };

  const selectOtp = async () => {
    if (!params.otp || params.otp.length < 6) {
      setIsOtpValid(false);
    } else {
      setIsOtpValid(true);
      console.log(params.otp);
      console.log(path);
      history.replace(`${path}/advocate-verification`);
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
          {/* {location.pathname.includes("login") ? null : <BackLink onClick={() => window.history.back()} />} */}
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
              t={t}
              stateName={stateName}
              setStateName={setStateName}
              changeBARRegistration={changeBARRegistration}
              BARRegistration={params.barRegistration}
              onSelect={onSelectVerification}
            />
          </Route>
          <Route path={`${path}/name`}>
            <SelectName
              onSelect={selectName}
              changeFirstName={changeFirstName}
              firstName={params.firstName}
              changeMiddleName={changeMiddleName}
              middleName={params.middleName}
              changeLastName={changeLastName}
              lastName={params.lastName}
            />
          </Route>
          {error && <Toast type={"error"} label={error} onClose={() => setError(null)} />}
        </AppContainer>
      </Switch>
    </div>
  );
};

export default Login;
