import React from 'react';
import Transition from '../Transition/Transition';

const Home = () => {
  return (
    <Transition OgComponent={() => (
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1>Home</h1>
      </div>
    )} />
  );
}

export default Home;
