import React from 'react';
import { motion } from 'framer-motion';

interface TransitionProps {
  OgComponent: React.ComponentType<any>;
}

const Transition: React.FC<TransitionProps> = ({ OgComponent }) => {
  return (
    <div>
      <OgComponent />
      <motion.div 
        className='fixed inset-0 h-screen bg-[#0f0f0f] origin-bottom'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div 
        className='fixed inset-0 h-screen bg-[#0f0f0f] origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default Transition;
