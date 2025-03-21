import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CitizenInfoLabel from "../atoms/CitizenInfoLabel";
import  ActionBar from "../atoms/ActionBar";
import SubmitBar from "../atoms/SubmitBar";
import Button from "../atoms/Button";
export const Details = ({ label, name, onClick}) => {
  return (
    <div className="detail" onClick={onClick}>
      <span className="label">
        <h2>{label}</h2>
      </span>
      <span className="name">{name}</span>
    </div>
  );
};

const DetailsCard = ({ data, serviceRequestIdKey, linkPrefix, handleSelect, selectedItems, keyForSelected, handleDetailCardClick, isTwoDynamicPrefix = false, getRedirectionLink, handleClickEnabled = true, t, showActionBar = true, showCitizenInfoLabel = false,submitButtonLabel,mode="default",apiDetails }) => {
  if (linkPrefix && serviceRequestIdKey) {
    return (
      <div>
        {data.map((object, itemIndex) => {
          return (
            <Link
              key={itemIndex}
              to={isTwoDynamicPrefix 
                ?
                  `${linkPrefix}${typeof serviceRequestIdKey === "function"
                    ?
                    serviceRequestIdKey(object)
                      :
                    `${getRedirectionLink(object["Application Type"]==="BPA_STAKEHOLDER_REGISTRATION"?"BPAREG":"BPA")}/${object[object["Application Type"]==="BPA_STAKEHOLDER_REGISTRATION"?"applicationNo":"Application Number"]}`}`
                :
                  `${linkPrefix}${typeof serviceRequestIdKey === "function"
                    ?
                    serviceRequestIdKey(object)
                      :
                    object[serviceRequestIdKey]}`
                }
            >
              <div className="details-container">
                {Object.keys(object).map((name, index) => {
                  if (name === "applicationNo" || name === "Vehicle Log") return null;
                  return <Details label={name} name={object[name]} key={index} />;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {data.map((object, itemIndex) => {
        return (
          <div
            key={itemIndex}
            style={{
              border: selectedItems?.includes(object[keyForSelected])
                ? '2px solid #c84c0e'
                : '2px solid #fff',
            }}
            className="details-container"
            onClick={(e) =>{
              e.stopPropagation()
              handleClickEnabled && handleSelect(object)
              }}
          >
            {Object.keys(object)
              .filter(
                (rowEle) =>
                  !(
                    typeof object[rowEle] == 'object' &&
                    object[rowEle]?.hidden == true
                  )
              )
              .map((name, index) => {
                return (
                  <Details
                    label={name}
                    name={object[name]}
                    key={index}
                    onClick={(e) =>{
                      e.stopPropagation()
                      handleClickEnabled && handleSelect(object)
                    }
                    }
                  />
                );
              })}
            {showCitizenInfoLabel ? (
              <CitizenInfoLabel
                style={{
                  margin: ' 2rem 0px',
                  padding: '10px',
                  backgroundColor: '#FFE2B5',
                  borderRadius: '0.25rem',
                }}
                textStyle={{ color: '#CC7B2F' }}
                info={t('ATM_INFO_LABEL')}
                text={t(`ATM_INFO_TEXT`)}
                fill={'#CC7B2F'}
              />
            ) : null}
            {showActionBar && mode==="default" ? (
              <SubmitBar
                onSubmit={() => handleDetailCardClick(object)}
                label={submitButtonLabel}
              />
            ) : null}
            {showActionBar && mode==="tqm" && (
              <Button
                label={t(Digit?.Customizations?.[apiDetails?.masterName]?.[apiDetails?.moduleName]?.getCustomActionLabel(object) || submitButtonLabel)}
                variation="secondary"
                type="button"
                onButtonClick={(e) => {
                  e.stopPropagation()
                  handleDetailCardClick(object)
                }}
                className={'header-btn'}
                style={{width:"100%"}}
                textStyles={{fontWeight:700}}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

DetailsCard.propTypes = {
  data: PropTypes.array,
};

DetailsCard.defaultProps = {
  data: [],
};

export default DetailsCard;
