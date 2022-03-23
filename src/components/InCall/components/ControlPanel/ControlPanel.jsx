import React, { useState } from "react";
import { useRecord } from '../../../../hooks/useRecord';
import { useVideoStream } from '../../../../hooks/useVideoStream';

export const ControlPanel = ({
  room,
  memberList,
  thisMemberId,
}) => {

  const { 
    startRecording,
    stopRecording,
    recording
  } = useRecord(room);
  const { videoStream } = useVideoStream(room, memberList, thisMemberId);


  return (
    <>
      <h1>Control</h1>
      <button onClick={() => videoStream()}>mute</button>
      <button onClick={() => startRecording()}>Start Record</button>
      <button onClick={() => stopRecording()}>Stop Record</button>
      {recording ? (
        <div className="animate-pulse border-4 border-red-600 rounded-full w-8 h-8 flex flex-col items-center justify-center">
          <div className="rounded-full w-4 h-4 bg-red-600"></div>
        </div>
      ) : null}
    </>
  );
};
