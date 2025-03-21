import React, { useEffect, useReducer, useState,useMemo } from "react";
import { Toast } from "@egovernments/digit-ui-components";
import ResultsTable from "./ResultsTable"
import reducer, { initialInboxState } from "./InboxSearchComposerReducer";
import InboxSearchLinks from "../atoms/InboxSearchLinks";
import { InboxContext } from "./InboxSearchComposerContext";
import SearchComponent from "../atoms/SearchComponent";
import PopUp from "../atoms/PopUp";
import SearchAction from "../molecules/SearchAction";
import FilterAction from "../molecules/FilterAction";
import MobileSearchComponent from "./MobileView/MobileSearchComponent";
import MobileSearchResults from "./MobileView/MobileSearchResults";
import MediaQuery from 'react-responsive';
import _ from "lodash";
import Header from "../atoms/Header";
import { useTranslation } from "react-i18next";


const InboxSearchComposer = ({configs,headerLabel,additionalConfig,onFormValueChange=()=>{},showTab,tabData,onTabChange}) => {
    const { t } = useTranslation();

    const [enable, setEnable] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialInboxState(configs));
    const [showToast, setShowToast] = useState(false);
    //for mobile view
    const [type, setType] = useState("");
    const [popup, setPopup] = useState(false);
   
    const [apiDetails, setApiDetails] = useState(configs?.apiDetails);

    useEffect(()=>{
        setApiDetails(configs?.apiDetails)
    },[configs])

    const mobileSearchSession = Digit.Hooks.useSessionStorage("MOBILE_SEARCH_MODAL_FORM", 
        {}
    );
    const [sessionFormData, setSessionFormData, clearSessionFormData] = mobileSearchSession;

    //for mobile view
    useEffect(() => {
        if (type) setPopup(true);
      }, [type]);
    
    useEffect(()=>{
        clearSessionFormData();
    },[]);
    
    useEffect(() => {
        //here if jsonpaths for search & table are same then searchform gets overridden
        
        if (Object.keys(state.searchForm)?.length >= 0) {
            const result = { ..._.get(apiDetails, apiDetails?.searchFormJsonPath, {}), ...state.searchForm }
            Object.keys(result).forEach(key => {
                if (!result[key]) delete result[key]
            });
            _.set(apiDetails, apiDetails?.searchFormJsonPath, result)
        }
        if (Object.keys(state.filterForm)?.length >= 0) {
            const result = { ..._.get(apiDetails, apiDetails?.filterFormJsonPath, {}), ...state.filterForm }
            Object.keys(result).forEach(key => {
                if (!result[key] || result[key]?.length===0) delete result[key]
            });
            _.set(apiDetails, apiDetails?.filterFormJsonPath, result)
        }
        
        if(Object.keys(state.tableForm)?.length >= 0) {
            _.set(apiDetails, apiDetails?.tableFormJsonPath, { ..._.get(apiDetails, apiDetails?.tableFormJsonPath, {}),...state.tableForm })  
        }
        const searchFormParamCount = Object.keys(state.searchForm).reduce((count,key)=>state.searchForm[key]===""?count:count+1,0)
        const filterFormParamCount = Object.keys(state.filterForm).reduce((count, key) => state.filterForm[key] === "" ? count : count + 1, 0)
        
        if (Object.keys(state.tableForm)?.length > 0 && (searchFormParamCount >= apiDetails?.minParametersForSearchForm || filterFormParamCount >= apiDetails?.minParametersForFilterForm)){
            setEnable(true)
        }

        if(configs?.type === 'inbox' || configs?.type === 'download') setEnable(true)

    },[state])
    

    useEffect(() => {
        onFormValueChange(state)
    }, [state])
    

    let requestCriteria = {
        url:configs?.apiDetails?.serviceName,
        params:configs?.apiDetails?.requestParam,
        body:configs?.apiDetails?.requestBody,
        config: {
            enabled: enable,
        },
        state
    };

    //clear the reducer state when user moves away from inbox screen(it already resets when component unmounts)(keeping this code here for reference)
    // useEffect(() => {
    //     return () => {
    //         if (!window.location.href.includes("/inbox")) {
                
    //             dispatch({
    //                 type: "clearSearchForm",
    //                 state:  configs?.sections?.search?.uiConfig?.defaultValues 
    //                 //need to pass form with empty strings 
    //             })
    //             dispatch({
    //                 type: "clearFilterForm",
    //                 state: configs?.sections?.filter?.uiConfig?.defaultValues 
    //                 //need to pass form with empty strings 
    //             })
    //         }
    //     };
    // }, [location]);
    
    const updatedReqCriteria = Digit?.Customizations?.[apiDetails?.masterName]?.[apiDetails?.moduleName]?.preProcess ? Digit?.Customizations?.[apiDetails?.masterName]?.[apiDetails?.moduleName]?.preProcess(requestCriteria,configs.additionalDetails) : requestCriteria 
    
    if(configs.customHookName){
        var { isLoading, data, revalidate,isFetching,refetch,error } = eval(`Digit.Hooks.${configs.customHookName}(updatedReqCriteria)`);
    }
    else {
       var { isLoading, data, revalidate,isFetching,error } = Digit.Hooks.useCustomAPIHook(updatedReqCriteria);
        
    }

    const closeToast = () => {
        setTimeout(() => {
          setShowToast(null);
        }, 5000);
      };

    useEffect(() => {
        if(error){
            setShowToast({ label:error?.message, type: "error" });
            closeToast()
        }
    }, [error])
    
    
    useEffect(() => {
        if(additionalConfig?.search?.callRefetch) {
            refetch()
            additionalConfig?.search?.setCallRefetch(false)
        }
    }, [additionalConfig?.search?.callRefetch])
    

    useEffect(() => {
        return () => {
            revalidate();
            setEnable(false);
        };
    })

    //for mobile view
    const handlePopupClose = () => {
        setPopup(false);
        setType("");
    }

    return (
        <InboxContext.Provider value={{state,dispatch}} >
                          {headerLabel&&<Header className="digit-form-composer-header">{ t(headerLabel)}</Header>}
            <div className="inbox-search-component-wrapper ">
            <div className={`sections-parent ${configs?.type}`}>
                {
                    configs?.sections?.links?.show &&  
                        <div className="section links">
                            <InboxSearchLinks 
                              headerText={configs?.sections?.links?.uiConfig?.label} 
                              links={configs?.sections?.links?.uiConfig?.links} 
                              businessService="WORKS" 
                              logoIcon={configs?.sections?.links?.uiConfig?.logoIcon}
                            ></InboxSearchLinks>
                        </div>
                }
                {
                    configs?.type === 'search' && configs?.sections?.search?.show &&
                        <div className={`section search ${showTab ? "tab": ""}`}>
                            <SearchComponent 
                                uiConfig={ configs?.sections?.search?.uiConfig} 
                                header={configs?.sections?.search?.label} 
                                screenType={configs.type}
                                fullConfig={configs}
                                data={data}
                                showTab={showTab}
                                showTabCount={configs?.sections?.search?.uiConfig?.showTabCount}
                                tabData={tabData}
                                onTabChange={onTabChange}
                                />
                        </div>

                }
                {   
                    configs?.type === 'search' && configs?.sections?.filter?.show && 

                        <div className="section filter">
                            <SearchComponent 
                                uiConfig={ configs?.sections?.filter?.uiConfig} 
                                header={configs?.sections?.filter?.label} 
                                screenType={configs.type}
                                fullConfig={configs}
                                data={data}
                                showTabCount={configs?.sections?.filter?.uiConfig?.showTabCount}
                                />
                        </div> 
                }
                {
                    configs?.type === 'inbox' && configs?.sections?.search?.show &&
                    <MediaQuery minWidth={426}>
                        <div className="section search">
                            <SearchComponent 
                                uiConfig={ configs?.sections?.search?.uiConfig} 
                                header={configs?.sections?.search?.label} 
                                screenType={configs.type}
                                fullConfig={configs}
                                data={data}
                                showTabCount={configs?.sections?.search?.uiConfig?.showTabCount}
                                />
                        </div>
                     </MediaQuery>
                }
                {   
                    configs?.type === 'inbox' && configs?.sections?.filter?.show && 
                    <MediaQuery minWidth={426}>
                        <div className="section filter">
                            <SearchComponent 
                                uiConfig={ configs?.sections?.filter?.uiConfig} 
                                header={configs?.sections?.filter?.label} 
                                screenType={configs.type}
                                fullConfig={configs}
                                data={data}
                                showTabCount={configs?.sections?.filter?.uiConfig?.showTabCount}
                                />
                        </div> 
                    </MediaQuery>
                }
                {   configs?.type === 'inbox' && <MediaQuery maxWidth={426}>
                    <div className="searchBox">
                    {
                      configs?.sections?.search?.show && (
                        <SearchAction 
                        text="SEARCH" 
                        handleActionClick={() => {
                          setType("SEARCH");
                          setPopup(true);
                        }}
                        />
                    )}
                    {configs?.sections?.filter?.show && (
                      <FilterAction
                        text="FILTER"
                          handleActionClick={() => {
                            setType("FILTER");
                            setPopup(true);
                          }}
                      />
                    )}
                   </div>
                   </MediaQuery>
                }
                {   
                    configs?.sections?.searchResult?.show &&
                        <div className={`results-table-wrapper ${configs?.sections?.searchResult?.uiConfig?.resultsWrapperClassName}`} style={data?.[configs?.sections?.searchResult?.uiConfig?.resultsJsonPath]?.length > 0 ? (!(isLoading || isFetching) ?{ overflowX: "auto" }: {}) : {  }} >
                            <MediaQuery minWidth={426}>
                    {/* configs?.sections?.searchResult?.show &&  
                        <div style={data?.[configs?.sections?.searchResult?.uiConfig?.resultsJsonPath]?.length > 0 ? (!(isLoading || isFetching) ?{ overflowX: "scroll", borderRadius : "4px" }: {}) : {  }} > */}

                            <ResultsTable 
                                config={configs?.sections?.searchResult?.uiConfig} 
                                data={data} 
                                isLoading={isLoading} 
                                isFetching={isFetching} 
                                fullConfig={configs}
                                additionalConfig={additionalConfig}
                                />
                            </MediaQuery>
                            <MediaQuery maxWidth={426}>
                            <MobileSearchResults
                              config={configs?.sections?.searchResult?.uiConfig} 
                              data={data} 
                              isLoading={isLoading} 
                              isFetching={isFetching} 
                              fullConfig={configs}/>
                            </MediaQuery>
                        </div>
                }
                {popup && (
              <PopUp>
              {type === "FILTER" && (
                <div className="popup-module">
                    <MobileSearchComponent
                    uiConfig={ configs?.sections?.filter?.uiConfig} 
                    header={configs?.sections?.filter?.label} 
                    modalType={type}
                    screenType={configs.type}
                    fullConfig={configs}
                    data={data}
                    onClose={handlePopupClose}
                    defaultValues={configs?.sections?.filter?.uiConfig?.defaultValues}
                    />
                </div>
              )}
              {/* {type === "SORT" && (
            <div className="popup-module">
              {<SortBy type="mobile" sortParams={sortParams} onClose={handlePopupClose} onSort={onSort} />}
            </div>
              )} */}
              {type === "SEARCH" && (
                <div className="popup-module">
                    <MobileSearchComponent
                    uiConfig={ configs?.sections?.search?.uiConfig} 
                    header={configs?.sections?.search?.label} 
                    modalType={type}
                    screenType={configs.type}
                    fullConfig={configs}
                    data={data}
                    onClose={handlePopupClose}
                    defaultValues={configs?.sections?.search?.uiConfig?.defaultValues}
                    />
                </div>
              )}
            </PopUp>
          )}
            </div>
            <div className="additional-sections-parent">
                {/* One can use this Parent to add additional sub parents to render more sections */}
            </div>
            </div>   
            {showToast && <Toast label={showToast.label} type={showToast?.type} isDleteBtn={true} onClose={()=>setShowToast(null)}></Toast>}
        </InboxContext.Provider>
    )
}

export default InboxSearchComposer;
