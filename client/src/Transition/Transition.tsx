import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionProps {
  OgComponent: React.ComponentType<any>;
}

const Transition: React.FC<TransitionProps> = ({ OgComponent }) => {
  return (
    <AnimatePresence>
      <OgComponent />
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: 'white',
            filter: 'invert()',
            opacity: 0,
          }
        }}
      />
    </AnimatePresence>
  );
};

export default Transition;
