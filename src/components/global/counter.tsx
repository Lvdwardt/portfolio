"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  direction = "up",
  duration = 100,
  delay = 0,
}: {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: duration,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isInView) {
      timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [motionValue, isInView, value, direction, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}
