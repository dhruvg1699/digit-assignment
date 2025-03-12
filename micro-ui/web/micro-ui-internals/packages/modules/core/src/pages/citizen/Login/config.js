export const loginSteps = [
  {
    texts: {
      header: "Please enter your mobile number",
      cardText: "You will use this as your log in. We will send you an OTP to verify.",
      submitBarLabel: "Continue",
    },
    inputs: [
      {
        label: "Mobile No",
        type: "text",
        name: "mobileNumber",
        error: "Please Enter a valid mobile number",
        validation: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
      },
    ],
  },
  {
    texts: {
      header: "CS_LOGIN_OTP",
      cardText: "CS_LOGIN_OTP_TEXT",
      nextText: "CS_COMMONS_NEXT",
      submitBarLabel: "CS_COMMONS_NEXT",
    },
  },
  {
    texts: {
      header: "Enter your name as per official documents",
      cardText: "This is to ensure seamless verification and maintain compliance with official records",
      submitBarLabel: "CS_COMMONS_NEXT",
    },
    inputs: [
      {
        label: "CORE_COMMON_NAME",
        type: "text",
        name: "name",
        error: "CORE_COMMON_NAME_VALIDMSG",
        validation: {
          required: true,
          minlength: 1,
          maxlength: 50,
          // pattern: /^[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}$/i,
          // pattern: /^(?!\s)[^{0-9}^\$\"<>?\\\\~!@#$%^()+={}\[\]*,/_:;“”‘’]{1,50}(?!\s)$/i
          pattern: "^[A-Za-z]+( [A-Za-z]+)*$",
        },
      },
    ],
  },
];
