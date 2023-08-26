import React from "react";
import PageTransition from "../Transition/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div
        key="homeComponent"
        className="w-full h-screen flex flex-col items-center justify-center"
      >
        <h1>index</h1>
      </div>
    </PageTransition>
  );
};

export default Home;
