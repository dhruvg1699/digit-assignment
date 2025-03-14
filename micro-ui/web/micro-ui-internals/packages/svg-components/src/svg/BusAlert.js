import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const BusAlert = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10864)">
        <path
          d="M16 1C14.8611 0.999847 13.7394 1.27756 12.7322 1.80906C11.725 2.34056 10.8626 3.10978 10.22 4.05L10.24 4.02C9.84 4 9.42 4 9 4C4.58 4 1 4.5 1 8V18C1 18.88 1.39 19.67 2 20.22V22C2 22.2652 2.10536 22.5196 2.29289 22.7071C2.48043 22.8946 2.73478 23 3 23H4C4.26522 23 4.51957 22.8946 4.70711 22.7071C4.89464 22.5196 5 22.2652 5 22V21H13V22C13 22.2652 13.1054 22.5196 13.2929 22.7071C13.4804 22.8946 13.7348 23 14 23H15C15.2652 23 15.5196 22.8946 15.7071 22.7071C15.8946 22.5196 16 22.2652 16 22V20.22C16.61 19.67 17 18.88 17 18V14.92C18.7403 14.655 20.3169 13.7439 21.4155 12.3685C22.5142 10.993 23.0542 9.25407 22.9281 7.49821C22.802 5.74235 22.0189 4.09849 20.7349 2.89418C19.4509 1.68987 17.7603 1.01356 16 1V1ZM4.5 19C4.10218 19 3.72064 18.842 3.43934 18.5607C3.15804 18.2794 3 17.8978 3 17.5C3 17.1022 3.15804 16.7206 3.43934 16.4393C3.72064 16.158 4.10218 16 4.5 16C4.89782 16 5.27936 16.158 5.56066 16.4393C5.84196 16.7206 6 17.1022 6 17.5C6 17.8978 5.84196 18.2794 5.56066 18.5607C5.27936 18.842 4.89782 19 4.5 19ZM3 13V8H9C9 9.96 9.81 11.73 11.11 13H3ZM13.5 19C13.1022 19 12.7206 18.842 12.4393 18.5607C12.158 18.2794 12 17.8978 12 17.5C12 17.1022 12.158 16.7206 12.4393 16.4393C12.7206 16.158 13.1022 16 13.5 16C13.8978 16 14.2794 16.158 14.5607 16.4393C14.842 16.7206 15 17.1022 15 17.5C15 17.8978 14.842 18.2794 14.5607 18.5607C14.2794 18.842 13.8978 19 13.5 19ZM16 13C14.6739 13 13.4021 12.4732 12.4645 11.5355C11.5268 10.5979 11 9.32608 11 8C11 6.67392 11.5268 5.40215 12.4645 4.46447C13.4021 3.52678 14.6739 3 16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8C21 9.32608 20.4732 10.5979 19.5355 11.5355C18.5979 12.4732 17.3261 13 16 13ZM15 4H17V9H15V4ZM15 10H17V12H15V10Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_10864">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



BusAlert.propTypes = {
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
