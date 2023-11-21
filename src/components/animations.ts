import { AnimationControls, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export type TransitionProps = {
  animate?: AnimationControls | "visible" | "hidden";
  duration?: number;
  delay?: number;
};

/**
 * Helpers
 */

/**
 * Returns a number that decreases every 10th of a second until it reaches 0
 * @param delay
 */
export const useInitialDelay = (delay: number) => {
  const [initialDelay, setInitialDelay] = useState(delay);

  useEffect(
    () => {
      if (delay === 0) {
        return;
      }
      //each second 10 times, decrease the initialDelay by 0.1
      let i = delay * 10;
      const timeout = setInterval(() => {
        i--;
        setInitialDelay(i / 10);
        if (i < 0) {
          clearInterval(timeout);
        }
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return initialDelay;
};

/**
 * useShowWhenInView
 * @description
 * Hook to show a framer-motion animation when the element is in view.
 * @returns {object} ref and controls
 * Place ref on the outermost element of the component you want to animate
 * Add animate={controls} to all the animations you want to trigger when the element is in view
 */

export function useShowWhenInView(delay: number = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const initialDelay = useInitialDelay(delay);

  return { ref, controls, isInView, initialDelay };
}

/**
 * Returns a stagger delay based on the number of items and the index of the item
 * @param items The amount of items to stagger over at once
 * @param index The index of the item
 * @returns number
 */

export const staggerDelay = (items: number, index?: number) => {
  index = index || 0;
  return (index % items) * 0.2;
};

/**
 * generateAnimationConfig
 * @description
 * Helper function to create a framer-motion animation config
 * @param {object} properties - The properties to animate
 * @param {object} props - The props for the animation
 * @returns {object} - The framer-motion animation config
 * @example
 * const animation = generateAnimationConfig({ translateY: [20] }, props)
 */

export function generateAnimationConfig(
  properties: { [key: string]: number | number[] | string[] },
  { animate = "visible", duration = 1, delay = 0 }: TransitionProps
) {
  return {
    initial: "hidden",
    animate,
    variants: {
      hidden: {
        opacity: 0,
        ...Object.entries(properties).reduce(
          (acc, [key, value]) => {
            acc[key] = Array.isArray(value) ? value[0] : value;
            return acc;
          },
          {} as { [key: string]: number | string }
        ),
      },
      visible: {
        opacity: 1,
        ...Object.entries(properties).reduce(
          (acc, [key, value]) => {
            acc[key] = Array.isArray(value) ? value[1] || 0 : value;
            return acc;
          },
          {} as { [key: string]: number | string }
        ),
        transition: {
          duration,
          delay,
          ease: "easeInOut",
        },
      },
    },
  };
}

/**
 * Animations
 */

export const fadeInAnimation = (props: TransitionProps) =>
  generateAnimationConfig({}, props);

export const translateUp20 = (props: TransitionProps) =>
  generateAnimationConfig({ translateY: [20] }, props);

export const scaleUp = (props: TransitionProps) =>
  generateAnimationConfig({ scale: [0.2, 1] }, props);
