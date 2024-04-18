import { MotionProps } from "framer-motion";

export const animateContent = {
  variants: {
    open: {
      x: 0,
      filter: "blur(0)",
      opacity: 1,
      transition: {
        type: "tween",
        damping: 20,
        stiffness: 200,
      },
    },
    closed: {
      x: -100,
      filter: "blur(16px)",
      opacity: 0,
      transition: {
        type: "tween",
        damping: 20,
        stiffness: 200,
      },
    },
  },
} satisfies MotionProps;
