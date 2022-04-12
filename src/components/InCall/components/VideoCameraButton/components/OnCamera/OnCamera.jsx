import React from "react";
import { VideoCamera } from "../../../../../Icons/VideoCamera/VideoCamera";

export const OnCamera = ({ videoMuted }) => {
  return (
    <>
      {videoMuted ? (
        <div className="relative">
          <VideoCamera />
          <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
        </div>
      ) : (
        <VideoCamera />
      )}
    </>
  );
};
