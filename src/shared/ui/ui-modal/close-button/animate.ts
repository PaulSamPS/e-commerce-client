import { MotionProps } from 'framer-motion';

export const animateCloseButton = {
    variants: {
        open: { x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                damping: 18,
                stiffness: 200
            }
        },
        closed: { x: 100,
            opacity: 0,
        },
    },
} satisfies MotionProps;
