import React, { useEffect } from "react";
import { VideoCamera } from "../../../Icons/VideoCamera/VideoCamera";
import { useDispatch, useSelector } from "react-redux";
import {
  getCameras,
  updateCameras,
  videoUnmute,
  videoMute,
} from "../../../../features/deviceSlice";
import { setVideoMuted } from "../../../../features/deviceSlice";

export const VideoCameraButton = () => {
  const dispatch = useDispatch();
  const cameras = useSelector((state) => state?.device?.cameras);
  const videoMuted = useSelector((state) => state?.device?.videoMuted);

  const handleToggleSelfVideoMuted = async () => {
    dispatch(getCameras());
    if (videoMuted) {
      dispatch(videoUnmute());
      dispatch(setVideoMuted(false));
    } else {
      dispatch(videoMute());
      dispatch(setVideoMuted(true));
    }
  };

  const handleChangeCamera = (e) => {
    dispatch(getCameras());
    dispatch(updateCameras(e.target.value));
  };

  useEffect(() => {
    dispatch(getCameras());
  }, [dispatch]);

  return (
    <div className="flex flex-col relative px-2 pb-4">
      <div className="flex">
        <select
          onChange={(e) => handleChangeCamera(e)}
          className={`flex w-8 h-14 outline-none chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
        >
          <option value="test">test</option>
          {cameras &&
            cameras.map((cam) => {
              return (
                <option
                  className="absolute top-[-20px]"
                  key={cam.deviceId}
                  value={cam.deviceId}
                >
                  {cam.label}
                </option>
              );
            })}
        </select>

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
