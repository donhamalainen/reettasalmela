"use client";
import { useWindowSize } from "@/hook/useWindowSize";
import React, { useRef, useEffect, useState } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function BackgroundBlurSVG() {
  const { height: HEIGHT = 900, width: WIDTH = 1440 } = useWindowSize();
  const [mouse, setMouse] = useState({ x: WIDTH / 2, y: HEIGHT / 2 });

  const [ellipses, setEllipses] = useState([
    { cx: 400, cy: 300, rx: 320, ry: 180, color: "url(#pop)", opacity: 0.7 },
    {
      cx: WIDTH - 200,
      cy: HEIGHT - 200,
      rx: 260,
      ry: 140,
      color: "url(#accent)",
      opacity: 0.5,
    },
  ]);
  const requestRef = useRef<number | undefined>(undefined);

  // Hiiren liikkeen kuuntelu
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / window.innerWidth) * WIDTH,
        y: ((e.clientY - rect.top) / window.innerHeight) * HEIGHT,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [WIDTH, HEIGHT]);

  // Animaatio: ellipsit liikkuvat poispäin hiirestä
  useEffect(() => {
    const animate = () => {
      setEllipses((prev) =>
        prev.map((el, i) => {
          // Vektori hiirestä ellipsiin
          const dx = el.cx - mouse.x;
          const dy = el.cy - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Jos hiiri lähellä, karkaa enemmän
          const force = Math.max(0, 200 - dist) / 200;
          const angle = Math.atan2(dy, dx);
          const moveDist = force * 40 * (i + 1); // eri ellipsit liikkuvat eri verran
          const targetCx = lerp(el.cx, el.cx + Math.cos(angle) * moveDist, 0.2);
          const targetCy = lerp(el.cy, el.cy + Math.sin(angle) * moveDist, 0.2);
          // Palautuu hitaasti alkuperäiseen paikkaan jos hiiri kaukana
          const homeCx = lerp(targetCx, i === 0 ? 400 : 1100, 0.05);
          const homeCy = lerp(targetCy, i === 0 ? 300 : 600, 0.05);
          return { ...el, cx: homeCx, cy: homeCy };
        })
      );
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [mouse.x, mouse.y]);

  return (
    <svg
      className="absolute inset-0 w-full h-full -z-50 pointer-events-none"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ filter: "blur(70px)" }}
    >
      <defs>
        <linearGradient id="accent" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ebc8a" />
          <stop offset="100%" stopColor="#8ab6bc" />
        </linearGradient>
      </defs>
      <g>
        {ellipses.map((el, i) => (
          <ellipse
            key={i}
            cx={el.cx}
            cy={el.cy}
            rx={el.rx}
            ry={el.ry}
            fill={el.color}
            opacity={el.opacity}
          />
        ))}
      </g>
    </svg>
  );
}
