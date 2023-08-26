import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
    <motion.div
      className='fixed bg-rose-500 inset-0'
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          scaleX: 1,
          // opacity: 0,
          // filter: "blur(10px)",
        },
        pageAnimate: {
          scaleX: 0,
          // opacity: 1,
          // filter: "blur(0px)",
          transition: {
            delay:1,  
            duration: 1,
            ease: "circOut"
          }
        },
        pageExit: {
          scaleX: 1,
          // filter: "blur(10px)",
          // opacity: 0,
          transition: {
            delay:1,  
            duration: 1,
            ease: "circIn"
          },
        },
      }}
      transition={{
        delay:1,    
        duration: 1, 
      }}
    />
      {children}
    </>
    
  );
};

export default PageTransition;
