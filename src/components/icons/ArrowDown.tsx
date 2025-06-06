"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface ArrowDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const arrowVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  animate: {
    y: [0, 4, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const ArrowDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ArrowDownProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g variants={arrowVariants} animate={controls} initial="normal">
          <path d="M18 7v9" />
          <path d="m14 12 4 4 4-4" />
        </motion.g>
      </svg>
    </div>
  );
};

export { ArrowDown };
