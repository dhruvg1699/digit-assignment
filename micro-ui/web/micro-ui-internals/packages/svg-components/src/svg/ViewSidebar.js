import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const ViewSidebar = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_1195)">
        <path d="M16 20H2V4H16V20ZM18 8H22V4H18V8ZM18 20H22V16H18V20ZM18 14H22V10H18V14Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_1195">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

ViewSidebar.propTypes = {
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
