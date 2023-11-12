import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
}

export const Container=({ children }: ContainerProps)=>{
  return (
    <main className="container mx-auto my-4 p-4">
      {children}
    </main>
  )
}
