import React from "react";
import { VideoCamera } from "../../../../../Icons/VideoCamera/VideoCamera";

export const OnCamera = ({ videoMuted }) => {
  return (
    <>
      {videoMuted ? (
        <div className="relative">
          <VideoCamera />
          <div className="border-r-2 md:border-r-2 h-8 md:h-7 border-slate-200 rotate-[-45deg] absolute top-[0px] md:top-[-2px] left-[12px] md:left-[13px]"></div>
        </div>
      ) : (
        <VideoCamera />
      )}
    </>
  );
};
