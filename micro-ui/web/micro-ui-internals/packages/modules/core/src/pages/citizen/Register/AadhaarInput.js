import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const BACKSPACE = 8;

const SingleInput = ({ isFocus, onChange, onFocus, value, ...rest }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (isFocus) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  return <input className="input-aadhaar" onChange={onChange} onFocus={onFocus} ref={inputRef} type="text" value={value ? value : ""} {...rest} />;
};

const AadhaarInput = (props) => {
  const [activeInput, setActiveInput] = useState(0);
  const length = 3;

  const isInputValueValid = (value) => {
    return /^[0-9]+$/.test(value);
  };

  const changeCodeAtFocus = (value) => {
    if (value.length <= 4) {
      //   const { onChange } = props.config?.populators?.inputs[0];
      const otp = getOtpValue();
      console.log(otp);
      otp[activeInput] = value;
      const otpValue = otp.join("");
      console.log(otp);
      props.config?.populators?.inputs[0]?.onChange(otpValue);
    }
  };

  const focusNextInput = () => {
    setActiveInput((activeInput) => Math.min(activeInput + 1, length - 1));
  };

  const focusPrevInput = () => {
    setActiveInput((activeInput) => Math.max(activeInput - 1, 0));
  };

  function splitIntoThreeParts(str) {
    let len = str.length;
    let part1 = "",
      part2 = "",
      part3 = "";

    if (len <= 4) {
      return [str, "", ""]; // If the string is too short, put everything in the first part.
    } else if (len <= 8) {
      part1 = str.slice(0, 4);
      part2 = str.slice(4);
    } else {
      part1 = str.slice(0, 4);
      let remaining = str.slice(4);

      if (remaining.length >= 4) {
        part2 = remaining.slice(0, 4);
        part3 = remaining.slice(4);
      } else {
        part2 = remaining; // If not enough for a third part, keep everything in part2
      }
    }

    return [part1, part2, part3];
  }

  const getOtpValue = () =>
    props.config?.populators?.inputs[0]?.value ? splitIntoThreeParts(props.config?.populators?.inputs[0]?.value.toString()) : [];

  const handleKeyDown = (event) => {
    if (event.keyCode === BACKSPACE || event.key === "Backspace") {
      event.preventDefault();
      changeCodeAtFocus("");
      focusPrevInput();
    }
  };

  function inputChange(event) {
    const { value } = event.target;

    if (isInputValueValid(value)) {
      console.log(value, value.length);
      changeCodeAtFocus(value);
      if (value.length >= 4) focusNextInput();
    } else if (value === "") {
      changeCodeAtFocus(""); // Handle clearing the input
    }
  }

  const OTPStack = [];
  const otp = getOtpValue();
  console.log(otp, otp.slice(0, 4));
  for (let i = 0; i < length; i++) {
    OTPStack.push(
      <SingleInput
        key={i}
        isFocus={activeInput === i}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
        onFocus={(e) => {
          setActiveInput(i);
          e.target.select();
        }}
        value={otp[i]}
      />
    );
  }

  return <div className={`input-otp-wrap`}>{OTPStack}</div>;
};

export default AadhaarInput;
