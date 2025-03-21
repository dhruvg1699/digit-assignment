import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const BookOnline = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_164)">
        <path
          d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM7 18V6H17V18H7ZM16 11V9.14C16 8.51 15.55 8 15 8H9C8.45 8 8 8.51 8 9.14V11.1C8.55 11.1 9 11.55 9 12.1C9 12.65 8.55 13.1 8 13.1V14.86C8 15.49 8.45 16 9 16H15C15.55 16 16 15.49 16 14.86V13C15.45 13 15 12.55 15 12C15 11.45 15.45 11 16 11ZM12.5 14.5H11.5V13.5H12.5V14.5ZM12.5 12.5H11.5V11.5H12.5V12.5ZM12.5 10.5H11.5V9.5H12.5V10.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_164">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



BookOnline.propTypes = {
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
