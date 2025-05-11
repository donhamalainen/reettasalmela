"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const FlowerSvg = ({
  width = 200,
  height = 200,
  className,
  spinning = false,
  colors = {
    gradientStart: "#FFB6C1",
    gradientEnd: "#FF69B4",
  },
}: {
  width?: number;
  height?: number;
  className?: HTMLElement["className"];
  spinning?: boolean;
  colors?: {
    gradientStart?: string;
    gradientEnd?: string;
  };
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!spinning || !svgRef.current) return;

    // Vain jatkuva pyöritys, ei scrollTriggeria
    const tween = gsap.to(svgRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    return () => {
      tween.kill();
    };
  }, [spinning]);

  return (
    <svg
      ref={svgRef}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ willChange: "transform" }}
    >
      <g clipPath="url(#clip0_119_289)">
        <path
          d="M99.552 18.9087C99.552 -35.1254 133.316 41.4697 119.834 64.8658C133.34 41.4697 216.568 32.4143 169.764 59.4373C216.568 32.4143 167.116 100.002 140.104 100.002C167.116 100.002 216.568 167.553 169.764 140.566C216.568 167.589 133.34 158.534 119.834 135.138C133.34 158.534 99.552 235.129 99.552 181.095C99.552 235.129 65.7762 158.534 79.2698 135.138C65.7642 158.534 -17.4643 167.589 29.3398 140.566C-17.4643 167.589 31.9884 100.002 59.0114 100.002C31.9884 100.002 -17.4643 32.4501 29.3398 59.4373C-17.4643 32.4143 65.7642 41.4697 79.2698 64.8658C65.7762 41.4458 99.552 -35.1254 99.552 18.9087Z"
          fill="url(#paint0_linear_119_289)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_119_289"
          x1="151.045"
          y1="32"
          x2="38.0152"
          y2="135.004"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0509862" stopColor={colors.gradientStart} />
          <stop offset="1" stopColor={colors.gradientEnd} />
        </linearGradient>
        <clipPath id="clip0_119_289">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
