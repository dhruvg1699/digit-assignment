import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const ExploreOff = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_366)">
        <path
          d="M14.19 14.19L12.78 12.78L11.22 11.22L11 11L9.81 9.81L4.93 4.93L2.27 2.27L1 3.54L3.78 6.32C3.67 6.48 3.57 6.64 3.47 6.8C3.43 6.87 3.38 6.94 3.34 7.01C3.25 7.16 3.17 7.32 3.09 7.48C3.04 7.58 2.99 7.69 2.93 7.8C2.87 7.94 2.8 8.08 2.74 8.23C2.64 8.47 2.55 8.71 2.47 8.96L2.38 9.26C2.33 9.46 2.28 9.65 2.24 9.85C2.22 9.96 2.2 10.07 2.17 10.18C2.13 10.38 2.1 10.58 2.08 10.79C2.07 10.89 2.05 10.99 2.05 11.09C2.02 11.38 2 11.69 2 12C2 17.52 6.48 22 12 22C12.31 22 12.62 21.98 12.92 21.95L13.22 21.92C13.42 21.9 13.63 21.86 13.83 21.83C13.94 21.81 14.05 21.79 14.16 21.76C14.36 21.72 14.55 21.67 14.74 21.61C14.84 21.58 14.94 21.56 15.04 21.52C15.29 21.44 15.53 21.35 15.77 21.25C15.92 21.19 16.06 21.12 16.2 21.06C16.31 21.01 16.42 20.96 16.53 20.9C16.69 20.82 16.84 20.74 16.99 20.65C17.06 20.61 17.13 20.56 17.2 20.52C17.36 20.42 17.52 20.32 17.68 20.21L20.46 23L21.73 21.73L19.07 19.07L14.19 14.19V14.19ZM6 18L9 11.54L12.46 15L6 18ZM22 12C22 12.31 21.98 12.62 21.95 12.92L21.92 13.22C21.9 13.42 21.86 13.63 21.83 13.83C21.81 13.94 21.79 14.05 21.76 14.16C21.72 14.36 21.67 14.55 21.61 14.74C21.58 14.84 21.56 14.95 21.52 15.05C21.44 15.3 21.35 15.54 21.25 15.78C21.19 15.93 21.12 16.07 21.06 16.21C21.01 16.32 20.96 16.43 20.9 16.54C20.82 16.7 20.74 16.85 20.65 17C20.61 17.07 20.56 17.14 20.52 17.21C20.42 17.37 20.32 17.53 20.21 17.69L15 12.46L18 6L11.54 9L6.32 3.78C6.48 3.67 6.64 3.57 6.8 3.47C6.87 3.43 6.94 3.38 7.01 3.34C7.16 3.25 7.32 3.17 7.47 3.09C7.58 3.04 7.69 2.99 7.8 2.93C7.94 2.87 8.08 2.8 8.23 2.74C8.47 2.64 8.71 2.55 8.96 2.47L9.27 2.38C9.46 2.33 9.65 2.27 9.85 2.23C9.96 2.21 10.07 2.19 10.18 2.16C10.38 2.12 10.58 2.09 10.79 2.07C10.89 2.06 10.99 2.04 11.09 2.04C11.38 2.02 11.69 2 12 2C17.52 2 22 6.48 22 12Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_366">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



ExploreOff.propTypes = {
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
