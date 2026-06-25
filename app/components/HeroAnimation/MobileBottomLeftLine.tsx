import { motion } from "motion/react";
import { lineAnimation } from "../Animation/LineAnimation";

export default function MobileBottomLeftLine() {
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
          d="M218 287.657
          C213.623 268.498 207.855 257.575 194.5 243.157
          C172.227 219.109 132.265 240.896 116.5 212.157
          C99.6462 181.431 104.42 133.323 138.5 125.157
          C161.714 119.595 196.253 125.851 194.5 149.657
          C193.264 166.458 185.572 179.13 170.5 186.657
          C129.787 206.989 72.5015 168.121 57.5005 125.157
          C44.9454 89.1982 115.195 58.1096 93.0005 27.157
          C74.4829 1.33253 35.9078 -2.58471 7.50049 11.657"
          stroke="#2563EB"
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
            values="0 0 0 0 0.145098 0 0 0 0 0.388235 0 0 0 0 0.921569 0 0 0 0.5 0"
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
