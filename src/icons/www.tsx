import React from "react";

interface IconProps {
  color?: string;
  size?: number;
}

const WwwIcon: React.FC<IconProps> = ({ color = "#09090B", size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.0002 6.33335C23.9017 4.68934 22.414 3.34222 20.6694 2.41176C18.9248 1.48131 16.9774 0.996357 15.0002 1.00002C13.0263 0.998696 11.0827 1.48482 9.34194 2.41522C7.60116 3.34563 6.11708 4.69151 5.02148 6.33335"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.3335 1C13.2945 2.66488 12.4761 4.45765 11.8988 6.33333M15.6668 1C16.7068 2.66475 17.5261 4.45752 18.1042 6.33333M25.0002 19.6667C23.9017 21.3107 22.414 22.6578 20.6694 23.5883C18.9248 24.5187 16.9774 25.0037 15.0002 25C13.0263 25.0013 11.0827 24.5152 9.34194 23.5848C7.60116 22.6544 6.11708 21.3085 5.02148 19.6667"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.3337 25C13.2946 23.3352 12.4762 21.5424 11.899 19.6667M15.667 25C16.7069 23.3353 17.5262 21.5425 18.1043 19.6667M1.66699 10.3334L3.00033 15.6667L5.00033 10.3334L7.00033 15.6667L8.33366 10.3334M21.667 10.3334L23.0003 15.6667L25.0003 10.3334L27.0003 15.6667L28.3337 10.3334M11.667 10.3334L13.0003 15.6667L15.0003 10.3334L17.0003 15.6667L18.3337 10.3334"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default WwwIcon;
