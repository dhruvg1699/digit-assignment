import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const AutoDelete = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_1262)">
        <path d="M15 2H11.5L10.5 1H5.5L4.5 2H1V4H15V2Z" fill={fill} />
        <path
          d="M16 9C15.3 9 14.63 9.1 14 9.29V5H2V17C2 18.1 2.9 19 4 19H9.68C10.8 21.36 13.21 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21Z"
          fill={fill}
        />
        <path d="M16.5 12H15V17L18.6 19.1L19.4 17.9L16.5 16.2V12Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_1262">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

AutoDelete.propTypes = {
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
