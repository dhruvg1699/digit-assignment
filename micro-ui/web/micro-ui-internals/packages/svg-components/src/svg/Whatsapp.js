import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const Whatsapp = ({ className, height = "24", width = "24", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4217_28)">
        <path
          d="M0.0566406 24L1.74364 17.837C0.702641 16.033 0.155641 13.988 0.156641 11.891C0.159641 5.335 5.49464 0 12.0496 0C15.2306 0.001 18.2166 1.24 20.4626 3.488C22.7076 5.736 23.9436 8.724 23.9426 11.902C23.9396 18.459 18.6046 23.794 12.0496 23.794C10.0596 23.793 8.09864 23.294 6.36164 22.346L0.0566406 24V24ZM6.65364 20.193C8.32964 21.188 9.92964 21.784 12.0456 21.785C17.4936 21.785 21.9316 17.351 21.9346 11.9C21.9366 6.438 17.5196 2.01 12.0536 2.008C6.60164 2.008 2.16664 6.442 2.16464 11.892C2.16364 14.117 2.81564 15.783 3.91064 17.526L2.91164 21.174L6.65364 20.193V20.193ZM18.0406 14.729C17.9666 14.605 17.7686 14.531 17.4706 14.382C17.1736 14.233 15.7126 13.514 15.4396 13.415C15.1676 13.316 14.9696 13.266 14.7706 13.564C14.5726 13.861 14.0026 14.531 13.8296 14.729C13.6566 14.927 13.4826 14.952 13.1856 14.803C12.8886 14.654 11.9306 14.341 10.7956 13.328C9.91264 12.54 9.31564 11.567 9.14264 11.269C8.96964 10.972 9.12464 10.811 9.27264 10.663C9.40664 10.53 9.56964 10.316 9.71864 10.142C9.86964 9.97 9.91864 9.846 10.0186 9.647C10.1176 9.449 10.0686 9.275 9.99364 9.126C9.91864 8.978 9.32464 7.515 9.07764 6.92C8.83564 6.341 8.59064 6.419 8.40864 6.41L7.83864 6.4C7.64064 6.4 7.31864 6.474 7.04664 6.772C6.77464 7.07 6.00664 7.788 6.00664 9.251C6.00664 10.714 7.07164 12.127 7.21964 12.325C7.36864 12.523 9.31464 15.525 12.2956 16.812C13.0046 17.118 13.5586 17.301 13.9896 17.438C14.7016 17.664 15.3496 17.632 15.8616 17.556C16.4326 17.471 17.6196 16.837 17.8676 16.143C18.1156 15.448 18.1156 14.853 18.0406 14.729V14.729Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_4217_28">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

Whatsapp.propTypes = {
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
