import React, { useState, useEffect } from "react";
import { VideoCamera } from "../../../Icons/VideoCamera/VideoCamera";
import { useDispatch, useSelector } from "react-redux";
import { getCameras, updateCameras } from "../../../../features/deviceSlice";
import { ChevronUp } from "../../../Icons/ChevronUp/ChevronUp";
import { setVideoMuted } from '../../../../features/deviceSlice';

export const VideoCameraButton = ({ room }) => {
  const dispatch = useDispatch();
  const cameras = useSelector((state) => state?.device?.cameras);
  const videoMuted = useSelector(state => state?.device?.videoMuted);
  const [view, setView] = useState(false);

  const handleToggleSelfVideoMuted = async () => {
    dispatch(getCameras());
    if (Object.keys(room).length !== 0) {
      if (videoMuted) {
        await room.videoUnmute();
        dispatch(setVideoMuted(false));
      } else {
        await room.videoMute();
        dispatch(setVideoMuted(true));
      }
    }
  };

  const handleChangeCamera = (e) => {
    dispatch(getCameras());
    dispatch(updateCameras({ room, id: e.target.value }));
  };

  useEffect(() => {
    dispatch(getCameras());
  }, [dispatch]);

  return (
    <div
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
      className="flex flex-col justify-center relative px-2 pb-4"
    >
      {view ? (
        <>
          <ChevronUp />
          <select
            onChange={(e) => handleChangeCamera(e)}
            className={`flex w-14 h-4 absolute top-0 form-select appearance-none text-transparent ${
              view ? "dark:bg-slate-300 animate-pulse" : "dark:bg-slate-500"
            } rounded`}
          >
            {cameras && cameras.map((cam) => {
              return (
                <option key={cam.deviceId} value={cam.deviceId}>
                  {cam.label}
                </option>
              );
            })}
          </select>
        </>
      ) : null}

      <button
        className={`flex ${
          view ? "dark:bg-slate-400" : "dark:bg-slate-500"
        }  rounded justify-center ${
          view ? "pt-6" : "pt-4"
        } w-14 h-14 transition-all`}
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
      <p className="text-center pt-1 text-slate-300">Cam</p>
    </div>
  );
};
