import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const AccessibilityNew = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_105_9)">
        <path
          d="M20.5 6C17.89 6.7 14.83 7 12 7C9.17 7 6.11 6.7 3.5 6L3 8C4.86 8.5 7 8.83 9 9V22H11V16H13V22H15V9C17 8.83 19.14 8.5 21 8L20.5 6ZM12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_9">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

AccessibilityNew.propTypes = {
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
