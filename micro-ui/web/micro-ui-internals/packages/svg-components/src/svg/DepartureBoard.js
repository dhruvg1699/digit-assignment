import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const DepartureBoard = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10911)">
        <path
          d="M16 1C13.6 1 11.48 2.21 10.22 4.05C10.23 4.04 10.23 4.03 10.24 4.02C9.84 4 9.42 4 9 4C4.58 4 1 4.5 1 8V18C1 18.88 1.39 19.67 2 20.22V22C2 22.55 2.45 23 3 23H4C4.55 23 5 22.55 5 22V21H13V22C13 22.55 13.45 23 14 23H15C15.55 23 16 22.55 16 22V20.22C16.61 19.67 17 18.88 17 18V14.92C20.39 14.43 23 11.53 23 8C23 4.13 19.87 1 16 1ZM4.5 19C3.67 19 3 18.33 3 17.5C3 16.67 3.67 16 4.5 16C5.33 16 6 16.67 6 17.5C6 18.33 5.33 19 4.5 19ZM3 13V8H9C9 9.96 9.81 11.73 11.11 13H3ZM13.5 19C12.67 19 12 18.33 12 17.5C12 16.67 12.67 16 13.5 16C14.33 16 15 16.67 15 17.5C15 18.33 14.33 19 13.5 19ZM16 13C13.24 13 11 10.76 11 8C11 5.24 13.24 3 16 3C18.76 3 21 5.24 21 8C21 10.76 18.76 13 16 13ZM16.5 4H15V9L18.62 11.16L19.37 9.93L16.5 8.25V4Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_10911">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



DepartureBoard.propTypes = {
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
