import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const Satellite = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11358)">
        <path
          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 4.99H8C8 6.65 6.66 8 5 8V4.99ZM5 12V10C7.76 10 10 7.75 10 4.99H12C12 8.86 8.87 12 5 12ZM5 18L8.5 13.5L11 16.51L14.5 12L19 18H5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_11358">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



Satellite.propTypes = {
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
