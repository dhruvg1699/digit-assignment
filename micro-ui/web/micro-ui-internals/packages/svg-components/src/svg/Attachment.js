import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const Attachment = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2399)">
        <path
          d="M2 12.5C2 9.46 4.46 7 7.5 7H18C20.21 7 22 8.79 22 11C22 13.21 20.21 15 18 15H9.5C8.12 15 7 13.88 7 12.5C7 11.12 8.12 10 9.5 10H17V12H9.41C8.86 12 8.86 13 9.41 13H18C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9H7.5C5.57 9 4 10.57 4 12.5C4 14.43 5.57 16 7.5 16H17V18H7.5C4.46 18 2 15.54 2 12.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_2399">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

Attachment.propTypes = {
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
