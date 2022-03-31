import React from 'react';

export const ButtonWrapper = ({children}) => {

  return (
    <div className="flex justify-around w-2/5">
      {children}
    </div>
  )
}