import React from "react";
import { Microphone } from "../../../../../Icons/Microphone/Microphone";

export const OnMicrophone = ({ audioMuted }) => {
  return (
    <>
      {audioMuted ? (
        <div className="relative">
          <Microphone />
          <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
        </div>
      ) : (
        <Microphone />
      )}
    </>
  );
};
