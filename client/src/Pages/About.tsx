import React from 'react'
import Transition from '../Transition/Transition';

const About = () => {
  return (
     <Transition OgComponent={() => (
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1>About</h1>
      </div>
    )} />
  )
}

export default About