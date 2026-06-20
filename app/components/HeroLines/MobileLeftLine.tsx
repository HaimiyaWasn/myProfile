import { motion } from "motion/react";
import { lineAnimation } from "../Animation/LineAnimation";

export default function MobileLeftLine() {
  return (
    <svg
      className="absolute left-0 bottom-0 max-w-56.5 h-auto"
      width="226"
      height="300"
      viewBox="0 0 226 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2457_148)">
        <motion.path
          {...lineAnimation}
          transition={{
            duration: 17,
            times: [0, 0.25, 0.5, 0.75, 0.751, 1],
            ease: "linear",
            repeat: Infinity,
          }}
          d="M7.50049 11.657C35.9078 -2.58471 74.4829 1.33253 93.0005 27.157C115.195 58.1096 44.9454 89.1982 57.5005 125.157C72.5015 168.121 129.787 206.989 170.5 186.657C185.572 179.13 193.264 166.458 194.5 149.657C196.253 125.851 161.714 119.595 138.5 125.157C104.42 133.323 99.6462 181.431 116.5 212.157C132.265 240.896 172.227 219.109 194.5 243.157C207.855 257.575 213.623 268.498 218 287.657"
          stroke="white"
          strokeWidth={5}
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2457_148"
          x="0"
          y="0"
          width="225.501"
          height="299.158"
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
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2457_148"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2457_148"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
