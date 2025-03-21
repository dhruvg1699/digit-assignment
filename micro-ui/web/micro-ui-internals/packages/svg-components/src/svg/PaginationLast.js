import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const PaginationLast = ({ className, width = "24", height = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_5133_131)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.58984 7.41L10.1798 12L5.58984 16.59L6.99984 18L12.9998 12L6.99984 6L5.58984 7.41ZM15.9998 6H17.9998V18H15.9998V6Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_5133_131">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>   
    </svg>
  );
};

PaginationLast.propTypes = {
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
