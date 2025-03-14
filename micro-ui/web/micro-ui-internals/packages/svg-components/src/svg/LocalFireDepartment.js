import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const LocalFireDepartment = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11131)">
        <path
          d="M19.48 12.3501C17.91 8.27014 12.32 8.05014 13.67 2.12014C13.77 1.68014 13.3 1.34014 12.92 1.57014C9.29 3.71014 6.68 8.00014 8.87 13.6201C9.05 14.0801 8.51 14.5101 8.12 14.2101C6.31 12.8401 6.12 10.8701 6.28 9.46014C6.34 8.94014 5.66 8.69014 5.37 9.12014C4.69 10.1601 4 11.8401 4 14.3701C4.38 19.9701 9.11 21.6901 10.81 21.9101C13.24 22.2201 15.87 21.7701 17.76 20.0401C19.84 18.1101 20.6 15.0301 19.48 12.3501ZM10.2 17.3801C11.64 17.0301 12.38 15.9901 12.58 15.0701C12.91 13.6401 11.62 12.2401 12.49 9.98014C12.82 11.8501 15.76 13.0201 15.76 15.0601C15.84 17.5901 13.1 19.7601 10.2 17.3801Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_11131">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



LocalFireDepartment.propTypes = {
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
