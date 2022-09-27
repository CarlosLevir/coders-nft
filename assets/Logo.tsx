import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
    >
      <rect width="42" height="42" fill="#FF2748" rx="12"></rect>
      <path
        fill="url(#paint0_linear_3342_4375)"
        d="M25.235 18.624H16.21c-1.277 0-1.72-.855-.974-1.894l4.513-6.32c.53-.758 1.418-.758 1.948 0l4.513 6.32c.747 1.04.303 1.894-.974 1.894z"
      ></path>
      <path
        fill="url(#paint1_linear_3342_4375)"
        d="M26.771 27.217h-12.1c-1.71 0-2.294-1.136-1.287-2.522l4.318-6.071h6.039l4.318 6.071c1.006 1.386.422 2.522-1.288 2.522z"
      ></path>
      <path
        fill="#fff"
        d="M21.534 27.217v4.33a.818.818 0 01-.812.81.818.818 0 01-.812-.81v-4.33h1.623z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3342_4375"
          x1="20.722"
          x2="20.722"
          y1="5.803"
          y2="21.276"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.154" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.741" stopColor="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3342_4375"
          x1="20.721"
          x2="20.721"
          y1="14.672"
          y2="29.812"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.154" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.741" stopColor="#fff"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
