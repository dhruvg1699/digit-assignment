# ASSIGNMENT DETAILS

Develop the frontend for the Advocate Registration as per the [Figma screens](https://www.figma.com/design/yZNmfEZZiKVmmGPQA4g5zZ/DIGIT-Developer-Certification?node-id=1-11774&t=Uk1w5CctM6mf80D1-1). More details can be found [here](https://beehyv0-my.sharepoint.com/:w:/g/personal/kranthikumar_singarapu_beehyv_com/EZmh7ejZE79IuB-RsMTSA18B0pqeEpeDYyMxDFH_0PHhaA?wdOrigin=TEAMS-WEB.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1741260553617&web=1)

# FEATURES IMPLEMENTED

1. Frontend for Registration Screens (Mobile Number input, Aadhaar Verification, Address & Name Input and OTP Screens)
2. Form Validations
3. Data Saved on local storage

Note: There is no Backend Implementation. So, features such as get OTP on Phone, Aadhaar verification, etc wont work.

# ASSIGNMENT ROUTE

The Route on which the assignment UI can be viewed is

```
/workbench-ui/citizen/register
```

All submitted data is stored in local storage

# DIGIT

DIGIT eGovernance Platform Services

DIGIT (Digital Infrastructure for Governance, Impact & Transformation) is India's largest platform for governance services. Visit https://core.digit.org/ for more details.

DIGIT platform is microservices based API platform enabling quick rebundling of services as per specific needs. This is a repo that lays down the core platform on top of which other mission services depend.

# DIGIT UI

This repository contains source code for web implementation of the new Digit UI modules with dependencies and libraries.

Workbench module is used to Manage the master data (MDMS V2 Service) used across the DIGIT Services / Applications

It is also used to manage the Localisation data present in the system (Localisation service)

## Run Locally

Clone the project

```bash
  git clone https://github.com/egovernments/DIGIT-Frontend.git
```

Go to the Sub directory to run UI

```bash
    cd into micro-ui/web/micro-ui-internals
```

Install dependencies

```bash
  yarn install
```

Add .env file

```bash
    micro-ui/web/micro-ui-internals/example/.env
```

Start the server

```bash
  yarn start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_PROXY_API` :: `{{server url}}`

`REACT_APP_GLOBAL` :: `{{server url}}`

`REACT_APP_PROXY_ASSETS` :: `{{server url}}`

`REACT_APP_USER_TYPE` :: `{{EMPLOYEE||CITIZEN}}`

`SKIP_PREFLIGHT_CHECK` :: `true`

[sample .env file](https://github.com/egovernments/Digit-Core/blob/workbench/frontend/micro-ui/web/micro-ui-internals/example/.env-unifieddev)

## Tech Stack

**Libraries:**

[React](https://react.dev/)

[React Hook Form](https://www.react-hook-form.com/)

[React Query](https://tanstack.com/query/v3/)

[Tailwind CSS](https://tailwindcss.com/)

[Webpack](https://webpack.js.org/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

- [@jagankumar-egov](https://www.github.com/jagankumar-egov)

## Documentation

[Documentation](https://https://core.digit.org/guides/developer-guide/ui-developer-guide/digit-ui)

## Support

For support, add the issues in https://github.com/egovernments/DIGIT-core/issues.

## Modules

    1. Core
    2. Workbench
    3. HRMS
    4. Dashboard
    5. Engagement
    6. Payment

## Starting with Digit-UI App (Impelmentation Teams) - MICRO-UI

Go to the Sub directory to run UI

```bash
    cd into micro-ui/web
```

```bash
  yarn install
```

Add .env file

```bash
    micro-ui/web/.env
```

Start the server

```bash
  yarn start
```

![Logo](https://s3.ap-south-1.amazonaws.com/works-dev-asset/mseva-white-logo.png)
