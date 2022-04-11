import React, { useEffect } from "react";
import { VideoCamera } from "../../../Icons/VideoCamera/VideoCamera";
import { useDispatch, useSelector } from "react-redux";
import {
  getCameras,
  videoUnmute,
  videoMute,
} from "../../../../features/deviceSlice";
import { setVideoMuted } from "../../../../features/deviceSlice";
import { isEmpty } from "../../../../helpers/helpers";
import { ChangeCamera } from './components/ChangeCamera/ChangeCamera';

export const VideoCameraButton = () => {
  const dispatch = useDispatch();
  const videoMuted = useSelector((state) => state?.device?.videoMuted);
  const room = useSelector((state) => state.room.room);

  const handleToggleSelfVideoMuted = async () => {
    dispatch(getCameras());
    if(isEmpty(room)) return
      if (videoMuted) {
        dispatch(videoUnmute());
        dispatch(setVideoMuted(false));
      } else {
        dispatch(videoMute());
        dispatch(setVideoMuted(true));
      }
  };


  return (
    <div className="flex flex-col relative px-2 pb-4">
      <div className="flex">
        <ChangeCamera />

        <button
          className={`flex dark:bg-slate-500 hover:dark:bg-slate-400
        rounded-r justify-center pt-4 border-l-2 border-slate-400
        w-14 h-14`}
          onClick={() => handleToggleSelfVideoMuted()}
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
      </div>

      <p className="text-center pt-1 text-slate-300">Camera</p>
    </div>
  );
};
