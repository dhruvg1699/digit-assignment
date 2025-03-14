import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const MoreTime = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2143)">
        <path d="M10 8V14L14.7 16.9L15.5 15.7L11.5 13.3V8H10Z" fill={fill} />
        <path
          d="M17.92 12C17.97 12.33 18 12.66 18 13C18 16.9 14.9 20 11 20C7.1 20 4 16.9 4 13C4 9.1 7.1 6 11 6C11.7 6 12.37 6.1 13 6.29V4.23C12.36 4.08 11.69 4 11 4C6 4 2 8 2 13C2 18 6 22 11 22C16 22 20 18 20 13C20 12.66 19.98 12.33 19.94 12H17.92Z"
          fill={fill}
        />
        <path d="M20 5V2H18V5H15V7H18V10H20V7H23V5H20Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_2143">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



MoreTime.propTypes = {
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
