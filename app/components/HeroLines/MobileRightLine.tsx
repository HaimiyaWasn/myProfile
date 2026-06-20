import { motion } from "motion/react";
import { lineAnimation } from "../Animation/LineAnimation";

export default function MobileRightLine() {
  return (
    <svg
      className="absolute right-0 top-0 max-w-37.25"
      width="149"
      height="200"
      viewBox="0 0 149 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2459_149)">
        <motion.path
          {...lineAnimation}
          transition={{
            delay: 1,
            duration: 10,
            times: [0, 0.25, 0.5, 0.75, 0.751, 1],
            ease: "linear",
            repeat: Infinity,
          }}
          d="M29.1164 1.5C29.1164 1.5 -2.30137 49.8193 10.6164 77.5C21.1164 100 49.1164 45.5 60.1164 58C93.9084 96.4003 43.5496 206.667 90.1164 185.5C128.616 168 149.616 109.5 149.616 109.5"
          stroke="black"
          strokeWidth={5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2459_149"
          x="0"
          y="-2.00024"
          width="157.117"
          height="201.675"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2459_149"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2459_149"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
