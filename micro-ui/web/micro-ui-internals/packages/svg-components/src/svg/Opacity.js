import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const Opacity = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_678)">
        <path
          d="M17.66 8.0001L12 2.3501L6.34 8.0001C4.78 9.5601 4 11.6401 4 13.6401C4 15.6401 4.78 17.7501 6.34 19.3101C7.9 20.8701 9.95 21.6601 12 21.6601C14.05 21.6601 16.1 20.8701 17.66 19.3101C19.22 17.7501 20 15.6401 20 13.6401C20 11.6401 19.22 9.5601 17.66 8.0001ZM6 14.0001C6.01 12.0001 6.62 10.7301 7.76 9.6001L12 5.2701L16.24 9.6501C17.38 10.7701 17.99 12.0001 18 14.0001H6Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_678">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



Opacity.propTypes = {
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
