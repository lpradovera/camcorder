import React from 'react';

export const Wrapper = ({children}) => {

  return (
    <div className="flex flex-col justify-center relative px-2 pb-4">
      {children}
    </div>
  )
}