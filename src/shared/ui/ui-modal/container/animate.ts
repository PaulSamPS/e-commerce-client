// export const animateContainer = {
//     open: {
//         opacity: 1,
//         transition: {
//             type: 'tween',
//             duration: 0.5,
//             delayChildren: 0.2,
//             staggerChildren: 0.05,
//         },
//     },
//     closed: {
//         opacity: 0,
//         transition: {
//             delay: 0.3,
//         }
//     },
// };

export const animateContainer = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};
