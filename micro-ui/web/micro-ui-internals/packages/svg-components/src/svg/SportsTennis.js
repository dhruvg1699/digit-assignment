import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const SportsTennis = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_176_1058)">
        <path
          d="M19.5198 2.4902C17.1798 0.150202 12.8998 0.620202 9.96984 3.5502C8.36984 5.1502 7.44984 7.4202 7.42984 9.0102C7.40984 10.5902 7.68984 12.9002 6.07984 14.5102L1.83984 18.7502L3.25984 20.1702L7.49984 15.9302C9.10984 14.3202 11.4198 14.6002 12.9998 14.5802C14.5798 14.5602 16.8598 13.6402 18.4598 12.0402C21.3798 9.1102 21.8598 4.8302 19.5198 2.4902ZM10.3198 11.6802C8.78984 10.1502 9.26984 7.0702 11.3798 4.9602C13.4898 2.8502 16.5598 2.3702 18.0998 3.9002C19.6298 5.4302 19.1498 8.5102 17.0398 10.6202C14.9298 12.7302 11.8598 13.2102 10.3198 11.6802Z"
          fill={fill}
        />
        <path
          d="M18 17C18.53 17 19.04 17.21 19.41 17.59C20.19 18.37 20.19 19.64 19.41 20.42C19.04 20.79 18.53 21 18 21C17.47 21 16.96 20.79 16.59 20.41C15.81 19.63 15.81 18.36 16.59 17.58C16.96 17.21 17.47 17 18 17ZM18 15C16.98 15 15.95 15.39 15.17 16.17C13.61 17.73 13.61 20.26 15.17 21.83C15.95 22.61 16.98 23 18 23C19.02 23 20.05 22.61 20.83 21.83C22.39 20.27 22.39 17.74 20.83 16.17C20.05 15.39 19.02 15 18 15Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_176_1058">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



SportsTennis.propTypes = {
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
