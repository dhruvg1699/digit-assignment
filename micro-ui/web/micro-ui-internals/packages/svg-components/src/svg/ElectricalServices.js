import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const ElectricalServices = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10978)">
        <path d="M21 14C21 13.45 20.55 13 20 13H18V15H20C20.55 15 21 14.55 21 14Z" fill={fill} />
        <path d="M20 17H18V19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17Z" fill={fill} />
        <path d="M12 14H10V18H12C12 19.1 12.9 20 14 20H17V12H14C12.9 12 12 12.9 12 14Z" fill={fill} />
        <path
          d="M5 13C5 11.9 5.9 11 7 11H8.5C10.43 11 12 9.43 12 7.5C12 5.57 10.43 4 8.5 4H5C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6H8.5C9.33 6 10 6.67 10 7.5C10 8.33 9.33 9 8.5 9H7C4.79 9 3 10.79 3 13C3 15.21 4.79 17 7 17H9V15H7C5.9 15 5 14.1 5 13Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_10978">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



ElectricalServices.propTypes = {
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
