import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const LineStyle = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_582)">
        <path
          d="M3 16H8V14H3V16ZM9.5 16H14.5V14H9.5V16ZM16 16H21V14H16V16ZM3 20H5V18H3V20ZM7 20H9V18H7V20ZM11 20H13V18H11V20ZM15 20H17V18H15V20ZM19 20H21V18H19V20ZM3 12H11V10H3V12ZM13 12H21V10H13V12ZM3 4V8H21V4H3Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_582">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



LineStyle.propTypes = {
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
