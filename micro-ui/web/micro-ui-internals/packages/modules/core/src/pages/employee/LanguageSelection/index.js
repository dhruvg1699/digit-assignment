import { Button, Card, SubmitBar, Loader } from "@egovernments/digit-ui-components";
import { CustomButton } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Background from "../../../components/Background";
import ImageComponent from "../../../components/ImageComponent";
const defaultLanguage = { label: "English", value: Digit.Utils.getDefaultLanguage() };
const LanguageSelection = () => {
  const { data: storeData, isLoading } = Digit.Hooks.useStore.getInitData();
  const { t } = useTranslation();
  const history = useHistory();
  const { languages, stateInfo } = storeData || {};
  let defaultLanguages = languages;
  if (!defaultLanguages || defaultLanguages?.length == 0) {
    defaultLanguages = [defaultLanguage];
  }
  const selectedLanguage = Digit.StoreData.getCurrentLanguage();
  const [selected, setselected] = useState(selectedLanguage);
  const handleChangeLanguage = (language) => {
    setselected(language.value);
    Digit.LocalizationService.changeLanguage(language.value, stateInfo.code);
  };

  const handleSubmit = (event) => {
    history.push(`/${window?.contextPath}/employee/user/login`);
  };

  if (isLoading) return <Loader />;
  return (
    <Background>
      <Card className={"bannerCard removeBottomMargin languageSelection"}>
        <div className="bannerHeader">
          <ImageComponent className="bannerLogo" src={stateInfo?.logoUrl} alt="Digit Banner Image" />

          <p>{t(`TENANT_TENANTS_${stateInfo?.code?.toUpperCase()}`)}</p>
        </div>
        <div className="language-selector" style={{ justifyContent: "space-around", marginBottom: "24px", padding: "0 5%" }}>
          {defaultLanguages.map((language, index) => (
            <div className="language-button-container" key={index}>
              <CustomButton
                selected={language.value === selected}
                text={t(language.label)}
                onClick={() => handleChangeLanguage(language)}
              ></CustomButton>
            </div>
          ))}
        </div>
        <SubmitBar style={{ width: "100%" }} label={t(`CORE_COMMON_CONTINUE`)} onSubmit={handleSubmit} />
      </Card>
      <div className="EmployeeLoginFooter">
        <ImageComponent
          alt="Powered by DIGIT"
          src={window?.globalConfigs?.getConfig?.("DIGIT_FOOTER_BW")}
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(window?.globalConfigs?.getConfig?.("DIGIT_HOME_URL"), "_blank").focus();
          }}
        />{" "}
      </div>
    </Background>
  );
};

export default LanguageSelection;
