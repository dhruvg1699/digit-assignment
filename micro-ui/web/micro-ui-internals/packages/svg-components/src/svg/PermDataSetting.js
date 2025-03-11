import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const PermDataSetting = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_737)">
        <path
          d="M18.99 11.5C19.33 11.5 19.66 11.53 19.99 11.57L20 0L0 20H11.56C11.52 19.67 11.49 19.34 11.49 19C11.49 14.86 14.85 11.5 18.99 11.5V11.5ZM22.7 19.49C22.72 19.33 22.74 19.17 22.74 19C22.74 18.83 22.73 18.67 22.7 18.51L23.76 17.68C23.85 17.6 23.88 17.47 23.82 17.36L22.82 15.63C22.76 15.52 22.63 15.48 22.51 15.52L21.27 16.02C21.01 15.82 20.73 15.65 20.42 15.53L20.23 14.21C20.22 14.09 20.11 14 19.99 14H17.99C17.87 14 17.76 14.09 17.74 14.21L17.55 15.53C17.25 15.66 16.96 15.82 16.7 16.02L15.46 15.52C15.35 15.48 15.22 15.52 15.15 15.63L14.15 17.36C14.09 17.47 14.11 17.6 14.21 17.68L15.27 18.51C15.25 18.67 15.24 18.83 15.24 19C15.24 19.17 15.25 19.33 15.27 19.49L14.21 20.32C14.12 20.4 14.09 20.53 14.15 20.64L15.15 22.37C15.21 22.48 15.34 22.52 15.46 22.48L16.7 21.98C16.96 22.18 17.24 22.35 17.55 22.47L17.74 23.79C17.76 23.91 17.86 24 17.99 24H19.99C20.11 24 20.22 23.91 20.24 23.79L20.43 22.47C20.73 22.34 21.02 22.18 21.27 21.98L22.52 22.48C22.63 22.52 22.76 22.48 22.83 22.37L23.83 20.64C23.89 20.53 23.86 20.4 23.77 20.32L22.7 19.49ZM18.99 20.5C18.16 20.5 17.49 19.83 17.49 19C17.49 18.17 18.16 17.5 18.99 17.5C19.82 17.5 20.49 18.17 20.49 19C20.49 19.83 19.82 20.5 18.99 20.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_737">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



PermDataSetting.propTypes = {
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
