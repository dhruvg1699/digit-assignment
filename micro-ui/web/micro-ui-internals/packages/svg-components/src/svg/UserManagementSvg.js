import React from "react";
import PropTypes from "prop-types";

export const UserManagementSvg = ({
  className = "",
  width = "24",
  height = "24",
  style = {},
  fill = "#e8eaed",
  onClick = null,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -960 960 960"
      className={className}
      style={style}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113Z"
        fill={fill}
      />
    </svg>
  );
};

UserManagementSvg.propTypes = {
  /** Custom width of the SVG icon */
  width: PropTypes.string,
  /** Custom height of the SVG icon */
  height: PropTypes.string,
  /** Custom color of the SVG icon */
  fill: PropTypes.string,
  /** Custom class of the SVG icon */
  className: PropTypes.string,
  /** Custom style of the SVG icon */
  style: PropTypes.object,
  /** Click event handler when icon is clicked */
  onClick: PropTypes.func,
};
