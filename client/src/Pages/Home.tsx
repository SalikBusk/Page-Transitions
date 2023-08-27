import React from "react";
import Transition from "../Transition/Transition";

const Home = () => {
  return (
    <Transition>
      <div
        key="homeComponent"
        className="w-full h-screen flex flex-col items-center justify-center bg-light dark:bg-dark"
      >
        <h1>index</h1>
      </div>
    </Transition>
  );
};

export default Home;
