import React from 'react'

interface ContainerProps {
    children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <main className='max-w-[2520px] m-auto md:px-10'>
        {children}
    </main>
  )
}

export default Container