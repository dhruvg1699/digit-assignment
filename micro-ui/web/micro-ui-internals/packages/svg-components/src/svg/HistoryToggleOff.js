import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const HistoryToggleOff = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_492)">
        <path
          d="M15.0998 19.3698L16.0998 21.1098C15.1398 21.5498 14.0898 21.8398 12.9998 21.9498V19.9298C13.7398 19.8398 14.4398 19.6498 15.0998 19.3698ZM4.0698 12.9998H2.0498C2.1598 14.0998 2.4498 15.1398 2.8898 16.0998L4.6298 15.0998C4.3498 14.4398 4.1598 13.7398 4.0698 12.9998ZM15.0998 4.6298L16.0998 2.8898C15.1398 2.4498 14.0998 2.1598 12.9998 2.0498V4.0698C13.7398 4.1598 14.4398 4.3498 15.0998 4.6298ZM19.9298 10.9998H21.9498C21.8398 9.8998 21.5498 8.85981 21.1098 7.89981L19.3698 8.8998C19.6498 9.5598 19.8398 10.2598 19.9298 10.9998ZM8.8998 19.3698L7.89981 21.1098C8.85981 21.5498 9.9098 21.8398 10.9998 21.9498V19.9298C10.2598 19.8398 9.5598 19.6498 8.8998 19.3698ZM10.9998 4.0698V2.0498C9.8998 2.1598 8.85981 2.4498 7.89981 2.8898L8.8998 4.6298C9.5598 4.3498 10.2598 4.1598 10.9998 4.0698ZM18.3598 7.1698L20.0998 6.1598C19.4698 5.2898 18.6998 4.5198 17.8298 3.8898L16.8198 5.6298C17.4098 6.0798 17.9198 6.5898 18.3598 7.1698ZM4.6298 8.8998L2.8898 7.89981C2.4498 8.85981 2.1598 9.8998 2.0498 10.9998H4.0698C4.1598 10.2598 4.3498 9.5598 4.6298 8.8998ZM19.9298 12.9998C19.8398 13.7398 19.6498 14.4398 19.3698 15.0998L21.1098 16.0998C21.5498 15.1398 21.8398 14.0898 21.9498 12.9998H19.9298V12.9998ZM16.8298 18.3598L17.8398 20.0998C18.7098 19.4698 19.4798 18.6998 20.1098 17.8298L18.3698 16.8198C17.9198 17.4098 17.4098 17.9198 16.8298 18.3598ZM7.1698 5.6398L6.1698 3.8898C5.2898 4.5298 4.5298 5.2898 3.8998 6.1698L5.6398 7.1798C6.0798 6.5898 6.5898 6.0798 7.1698 5.6398ZM5.6398 16.8298L3.8998 17.8298C4.5298 18.6998 5.2998 19.4698 6.1698 20.0998L7.1798 18.3598C6.5898 17.9198 6.0798 17.4098 5.6398 16.8298ZM12.9998 6.9998H10.9998V12.4098L15.2898 16.6998L16.6998 15.2898L12.9998 11.5898V6.9998Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_492">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



HistoryToggleOff.propTypes = {
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
