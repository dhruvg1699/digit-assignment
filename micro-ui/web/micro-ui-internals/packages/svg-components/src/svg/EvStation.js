import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const EvStation = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11023)">
        <path
          d="M19.77 7.23L19.78 7.22L16.06 3.5L15 4.56L17.11 6.67C16.17 7.03 15.5 7.93 15.5 9C15.5 10.38 16.62 11.5 18 11.5C18.36 11.5 18.69 11.42 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V21H14V13.5H15.5V18.5C15.5 19.88 16.62 21 18 21C19.38 21 20.5 19.88 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10ZM8 18V13.5H6L10 6V11H12L8 18Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_11023">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



EvStation.propTypes = {
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
