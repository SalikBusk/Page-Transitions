import React from "react";
import Transition from "../Transition/Transition";

const About = () => {
  return (
    <Transition>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-light dark:bg-dark">
        <h1>About</h1>
      </div>
    </Transition>
  );
};

export default About;
