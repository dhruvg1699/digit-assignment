import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const Accessible = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      onClick={onClick}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_105_12)">
        <path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" fill={fill} />
        <path
          d="M19 12.9999V10.9999C17.46 11.0199 15.91 10.2499 14.93 9.16992L13.64 7.73992C13.47 7.54992 13.26 7.39992 13.03 7.28992C13.02 7.28992 13.02 7.27992 13.01 7.27992H13C12.65 7.07992 12.25 6.97992 11.81 7.01992C10.76 7.10992 10 8.03992 10 9.08992V14.9999C10 16.0999 10.9 16.9999 12 16.9999H17V21.9999H19V16.4999C19 15.3999 18.1 14.4999 17 14.4999H14V11.0499C15.29 12.1199 17.25 12.9899 19 12.9999ZM12.83 17.9999C12.42 19.1599 11.31 19.9999 10 19.9999C8.34 19.9999 7 18.6599 7 16.9999C7 15.6899 7.84 14.5899 9 14.1699V12.0999C6.72 12.5599 5 14.5799 5 16.9999C5 19.7599 7.24 21.9999 10 21.9999C12.42 21.9999 14.44 20.2799 14.9 17.9999H12.83Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_12">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

Accessible.propTypes = {
  /** custom width of the svg icon */
  width: PropTypes.string,
  /** custom height of the svg icon */
  height: PropTypes.string,
  /** custom colour of the svg icon */
  fill: PropTypes.string,
  /** custom class of the svg icon */
  className: PropTypes.string,
  /** custom style of the svg icon */
  style: PropTypes.object,
  /** Click Event handler when icon is clicked */
  onClick: PropTypes.func,
};
