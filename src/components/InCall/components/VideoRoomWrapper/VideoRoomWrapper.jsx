import React from 'react';


export const VideoRoomWrapper = ({children, offset}) => {

  return (
    <div className={`flex flex-row ${offset ? 'justify-center' : 'justify-start'}`}>
      {children}
    </div>
  )
}