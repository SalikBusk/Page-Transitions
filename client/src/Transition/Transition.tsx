import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  children: React.ReactNode;
  ScaleX: boolean,
}

const Transition: React.FC<TransitionProps> = ({ children, ScaleX }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          ${ScaleX ? "" : ""},
          scale: 1,
          opacity: 1,
          filter: 'blur(5px)',
        },
        pageAnimate: {
          scale: 1,
          filter: 'blur(0px)',
        },
        pageExit: {
          scale: 0,
          opacity: 0,
          filter: 'blur(0px)',
        },
      }}
      transition={{
        delay: 0.5, 
      }}
      className=''
    >
      {children}
    </motion.div>
  );
};

export default Transition;
