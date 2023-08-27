import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="bg-rose-200 w-full h-screen fixed inset-0 origin-bottom z-[10000]"
        />
      )}
      {!isVisible && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="bg-rose-200 w-full h-screen fixed inset-0 origin-top z-[10000]"
        />
      )}
      {children}
    </>
  );
};

export default PageTransition;
