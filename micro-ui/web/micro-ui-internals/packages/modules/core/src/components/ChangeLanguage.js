import { Button, Dropdown } from "@egovernments/digit-ui-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = (prop) => {
  const isDropdown = prop.dropdown || false;
  const { data: storeData, isLoading } = Digit.Hooks.useStore.getInitData();
  const { languages, stateInfo } = storeData || {};
  const { t } = useTranslation();
  const selectedLanguage = Digit.StoreData.getCurrentLanguage();
  const [selected, setselected] = useState(selectedLanguage);
  const handleChangeLanguage = (language) => {
    setselected(language.value);
    Digit.LocalizationService.changeLanguage(language.value, stateInfo.code);
  };

  if (isLoading) return null;

  if (isDropdown) {
    return (
      <div>
        <Dropdown
          className={"language-dropdown"}
          option={languages}
          selected={languages?.find((language) => language?.value === selectedLanguage)}
          optionKey={"label"}
          select={handleChangeLanguage}
          freeze={true}
          customSelector={<label className="cp">{t(languages?.find((language) => language?.value === selected)?.label)}</label>}
        />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div style={{ marginBottom: "5px" }}>Language</div>
        <div className="language-selector">
          {languages.map((language, index) => (
            <div className="language-button-container" key={index}>
              <Button
                label={language.label}
                onClick={() => handleChangeLanguage(language)}
                variation={language.value === selected ? "primary" : ""}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
};

export default ChangeLanguage;
