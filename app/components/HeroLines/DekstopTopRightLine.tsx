import { motion } from "motion/react";
import { lineAnimation } from "../Animation/LineAnimation";

export default function DekstopTopRightLine() {
  return (
    <svg
      className="absolute right-0 top-0 max-w-114 h-auto"
      width="456"
      height="361"
      viewBox="0 0 456 361"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2453_145)">
        <motion.path
          {...lineAnimation}
          transition={{
            delay: 1,
            duration: 10,
            times: [0, 0.25, 0.5, 0.75, 0.751, 1],
            ease: "linear",
            repeat: Infinity,
          }}
          d="M72.8652 1C72.8652 1 -31.7309 89.3247 23.7013 124.692C79.7941 160.482 144.193 78.2363 220.935 91.7566C371.832 118.341 20.1657 295.907 158.468 342.435C295.034 388.379 457.5 178.122 457.5 178.122"
          stroke="white"
          strokeWidth={5}
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2453_145"
          x="0"
          y="-2.5"
          width="465"
          height="363"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2453_145"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2453_145"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
