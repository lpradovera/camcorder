import React from 'react';
import { Stop } from '../../../../Icons/Stop/Stop';


export const ButtonStop = ({room, currentPlayback}) => {
  
  const handleStop = async () => {
    await currentPlayback.stop();
  }

  return (
    <button onClick={() => handleStop()} className="absolute right-0">
      <Stop />
    </button>
  )
}