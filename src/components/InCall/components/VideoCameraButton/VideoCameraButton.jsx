import React from "react";
import { VideoCamera } from "../../../Icons/VideoCamera/VideoCamera";

export const VideoCameraButton = ({
   room,
   setVideoMuted,
   videoMuted 
  }) => {
  return (
    <div className="flex flex-col justify-center">
      <button
        className="flex dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onClick={() => {
          if(videoMuted) {
            room.videoUnmute();
            setVideoMuted(false);
          } else {
            room.videoMute();
            setVideoMuted(true);
          }
        }}
      >
        {videoMuted ? (
          <div className="relative">
            <VideoCamera />
            <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
          </div>
        ) : (
          <VideoCamera />
        )}
      </button>
      <p className="text-center pt-1 text-slate-300">Cam</p>
    </div>
  );
};
