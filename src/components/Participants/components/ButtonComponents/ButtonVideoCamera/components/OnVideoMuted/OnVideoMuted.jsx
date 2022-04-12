import React from "react";
import { VideoCamera } from "../../../../../../Icons/VideoCamera/VideoCamera";

export const OnVideoMuted = ({ videoMuted }) => {
  return (
    <>
      {videoMuted ? (
        <div className="relative">
          <VideoCamera width={6} height={6} />
          <div className="border-r-2 h-8 md:border-r-2 md:h-6 border-slate-200 rotate-[-45deg] absolute top-[-1px] md:top-[-1px] left-[13px] md:left-[13px]"></div>
        </div>
      ) : (
        <VideoCamera width={6} height={6} />
      )}
    </>
  );
};
