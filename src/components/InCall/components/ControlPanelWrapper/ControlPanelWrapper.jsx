import React from 'react';

export const ControlPanelWrapper = ({children}) => {

  return (
    <div className="fixed landscape:relative w-full md:w-9/12 bottom-5 flex flex-col justify-end">
      {children}
    </div>
  )
}