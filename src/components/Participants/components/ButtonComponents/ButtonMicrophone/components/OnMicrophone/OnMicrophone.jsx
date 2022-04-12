import React from "react";
import {Microphone } from '../../../../../../Icons/Microphone/Microphone';

export const OnMicrophone = ({ audioMuted }) => {
  return (
    <>
      {audioMuted ? (
        <div className="relative">
          <Microphone width={4} height={4} />
          <div className="border-r-2 h-8 md:h-8 border-slate-200 rotate-[-45deg] absolute top-[-4px] md:top-[-4px] left-[11px] md:left-[10px]"></div>
        </div>
      ) : (
        <Microphone width={4} height={4} />
      )}
    </>
  );
};
