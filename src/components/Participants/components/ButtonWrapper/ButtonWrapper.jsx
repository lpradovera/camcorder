import React from 'react';

export const ButtonWrapper = ({children}) => {

  return (
    <div className="flex justify-around w-28">
      {children}
    </div>
  )
}