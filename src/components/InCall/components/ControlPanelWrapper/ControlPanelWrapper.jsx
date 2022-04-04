import React from 'react';

export const ControlPanelWrapper = ({children}) => {

  return (
    <div className="fixed w-full md:w-9/12 bottom-0 flex flex-col justify-end">
      {children}
    </div>
  )
}