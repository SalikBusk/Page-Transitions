import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  children: React.ReactNode;
  scaleX?: number;
  scaleY?: number;
  opacity?: number;
}

const Transition: React.FC<TransitionProps> = ({ children, scaleX, scaleY, opacity }) => {

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          filter: "blur(5px)",
          scale: 1.1,
        },
        pageAnimate: {
          filter: "blur(0px)",
          scale: 1,
        },
        pageExit: {
          filter: "blur(5px)",
          scale: 1.1,
        },
      }}
      transition={{
        scaleX: scaleX !== undefined ? { duration: 0.5, ease: 'easeInOut', scaleX } : undefined,
        scaleY: scaleY !== undefined ? { duration: 0.5, ease: 'easeInOut', scaleY } : undefined,
        opacity: { duration: 0.5, ease: 'easeInOut' },
        filter: {
          blur: [0, 5],
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
