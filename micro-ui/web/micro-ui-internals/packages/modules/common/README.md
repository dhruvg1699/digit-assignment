

# digit-ui-module-common

## Install

```bash
npm install --save @egovernments/digit-ui-module-common
```

## Limitation

```bash
This Package is more specific to DIGIT-UI's can be used across mission's for Payments
```

## Usage

After adding the dependency make sure you have this dependency in

```bash
frontend/micro-ui/web/package.json
```

```json
"@egovernments/digit-ui-module-common":"^1.5.0",
```

then navigate to App.js

```bash
 frontend/micro-ui/web/src/App.js
```


```jsx
/** add this import **/

import { paymentConfigs, PaymentLinks, PaymentModule } from "@egovernments/digit-ui-module-common";

/** inside enabledModules add this new module key **/

const enabledModules = ["Payment"];

/** inside init Function call this function **/

const initDigitUI = () => {
  window?.Digit.ComponentRegistryService.setupRegistry({
    PaymentModule,
    ...paymentConfigs,
    PaymentLinks,
  });
};
```

### Changelog

```bash
1.8.0 workbench v1.0 
1.8.0-beta.1 republished due to some version issues
1.8.0-beta workbench base version beta release
1.7.0 urban 2.9
1.6.0 urban 2.8
1.5.31 updated the readme content
1.5.30 Fixes mannual receipt date range validation, Cheque and card number validation for FSM
1.5.29 version upgraded for fixes in payment modules
1.5.28 base version
```

### Contributors

[jagankumar-egov] [Tulika-eGov] [vamshikrishnakole-wtt-egov] [nabeelmd-eGov] [anil-egov] 


## Documentation

Documentation Site (https://core.digit.org/guides/developer-guide/ui-developer-guide/digit-ui)

## Maintainer

- [jagankumar-egov](https://www.github.com/jagankumar-egov)


### Published from DIGIT Frontend 
DIGIT Frontend Repo (https://github.com/egovernments/Digit-Frontend/tree/master)


![Logo](https://s3.ap-south-1.amazonaws.com/works-dev-asset/mseva-white-logo.png)
