import React, { useRef } from "react";
import Transition from "../Transition/Transition";
import { motion } from "framer-motion";
import { useFollowPointer } from "../Hooks/use-Follow-pointer";

const Home = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <Transition
      OgComponent={() => (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="w-[50vw] h-[50vh] flex flex-col items-center justify-center">
            <h1>home</h1>
            {/* <motion.div
            ref={ref}
            className="w-[15px] h-[15px] rounded-full bg-black"
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 3,
              stiffness: 50,
              restDelta: 0.001,
            }}
          /> */}
          </div>
        </div>
      )}
    />
  );
};

export default Home;
