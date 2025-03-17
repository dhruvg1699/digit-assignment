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
];
