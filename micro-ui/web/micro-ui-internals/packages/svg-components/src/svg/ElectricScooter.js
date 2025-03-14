import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const ElectricScooter = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11015)">
        <path
          d="M7.82018 16H15.0002V15C15.0002 12.79 16.7902 11 19.0002 11H19.7402L17.8402 2.56C17.6302 1.65 16.8202 1 15.8902 1H12.0002V3H15.8902L17.2902 9.25H17.2802C15.1202 9.9 13.4702 11.73 13.0902 14H7.82018C7.34018 12.66 5.96018 11.76 4.40018 12.06C3.22018 12.29 2.27018 13.26 2.05018 14.44C1.70018 16.34 3.16018 18 5.00018 18C6.30018 18 7.40018 17.16 7.82018 16ZM5.00018 16C4.45018 16 4.00018 15.55 4.00018 15C4.00018 14.45 4.45018 14 5.00018 14C5.55018 14 6.00018 14.45 6.00018 15C6.00018 15.55 5.55018 16 5.00018 16Z"
          fill={fill}
        />
        <path
          d="M19 12C17.34 12 16 13.34 16 15C16 16.66 17.34 18 19 18C20.66 18 22 16.66 22 15C22 13.34 20.66 12 19 12ZM19 16C18.45 16 18 15.55 18 15C18 14.45 18.45 14 19 14C19.55 14 20 14.45 20 15C20 15.55 19.55 16 19 16Z"
          fill={fill}
        />
        <path d="M11 20H7L13 23V21H17L11 18V20Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_1974_11015">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



ElectricScooter.propTypes = {
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
