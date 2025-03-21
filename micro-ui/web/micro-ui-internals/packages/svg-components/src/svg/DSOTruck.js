import React from "react";
import PropTypes from "prop-types";
import { COLOR_FILL } from "./constants";

export const DSOTruck = ({ className, width = "40", height = "40", style = {}, fill = COLOR_FILL, onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.61634 24.4922H7.52921C6.99795 25.1968 6.68241 26.0598 6.68241 27.0117H2.77371L1.61621 26.2073L1.61634 24.4922Z" fill={fill} />
      <path
        d="M19.9955 9.89893H5.75336C2.5899 9.89893 0 12.4887 0 15.6561V17.7733C0 20.9409 2.58978 23.5304 5.75336 23.5304H19.9951C23.1585 23.5304 25.7442 20.9407 25.7442 17.7733V15.6561C25.7445 12.4885 23.1588 9.89893 19.9955 9.89893Z"
        fill={fill}
      />
      <path
        d="M10.893 23.9297C9.18567 23.9297 7.7998 25.3134 7.7998 27.0125C7.7998 28.7223 9.18601 30.1009 10.893 30.1009C12.5947 30.1009 13.9758 28.7228 13.9758 27.0125C13.9756 25.313 12.5947 23.9297 10.893 23.9297ZM10.893 28.6954C9.95886 28.6954 9.20141 27.9436 9.20141 27.0118C9.20141 26.0858 9.95886 25.3339 10.893 25.3339C11.819 25.3339 12.5767 26.0858 12.5767 27.0118C12.5765 27.9434 11.8191 28.6954 10.893 28.6954Z"
        fill={fill}
      />
      <path
        d="M32.4269 23.9292C30.7182 23.9292 29.332 25.3151 29.332 27.012C29.332 28.721 30.7182 30.0987 32.4269 30.0987C34.1278 30.0987 35.514 28.721 35.514 27.012C35.5137 25.3151 34.128 23.9292 32.4269 23.9292ZM32.4269 28.6967C31.4976 28.6967 30.7381 27.9451 30.7381 27.0118C30.7381 26.0866 31.4977 25.3352 32.4269 25.3352C33.3521 25.3352 34.1076 26.0867 34.1076 27.0118C34.1077 27.9451 33.352 28.6967 32.4269 28.6967Z"
        fill={fill}
      />
      <path
        d="M39.5964 18.3194L37.3584 11.5877L33.8309 9.89893H26.7929V24.4923H14.252C14.7813 25.1994 15.1004 26.06 15.1004 27.0174H28.215C28.215 24.6943 30.1018 22.8156 32.4289 22.8156C34.0612 22.8156 35.4712 23.7489 36.1702 25.1145C36.4207 25.5953 36.5826 26.1408 36.6149 26.7226C36.6189 26.8156 36.6352 26.9125 36.6352 27.0176L40.0003 27.0174V19.9994L39.5964 18.3194ZM28.7765 18.3194V13.2689H36.2352L37.9159 18.3194H28.7765Z"
        fill={fill}
      />
    </svg>
  );
};



DSOTruck.propTypes = {
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
