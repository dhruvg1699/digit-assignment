import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const SmartButton = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_970)">
        <path
          d="M22 9V15C22 16.1 21.1 17 20 17H19V15H20V9H4V15H10V17H4C2.9 17 2 16.1 2 15V9C2 7.9 2.9 7 4 7H20C21.1 7 22 7.9 22 9ZM14.5 19L15.59 16.59L18 15.5L15.59 14.41L14.5 12L13.41 14.41L11 15.5L13.41 16.59L14.5 19ZM17 14L17.62 12.62L19 12L17.62 11.38L17 10L16.38 11.38L15 12L16.38 12.62L17 14ZM14.5 19L15.59 16.59L18 15.5L15.59 14.41L14.5 12L13.41 14.41L11 15.5L13.41 16.59L14.5 19ZM17 14L17.62 12.62L19 12L17.62 11.38L17 10L16.38 11.38L15 12L16.38 12.62L17 14Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_970">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



SmartButton.propTypes = {
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
