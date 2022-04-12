import React from "react";
import { Wrapper } from './components/Wrapper/Wrapper';
import { useDispatch, useSelector } from "react-redux";
import { ButtonName } from '../ButtonName/ButtonName';
import {
  getCameras,
  videoUnmute,
  videoMute,
} from "../../../../features/deviceSlice";
import { OnCamera } from './components/OnCamera/OnCamera';
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
    <Wrapper>
      <div className="flex">
        <ChangeCamera />

        <button
          className={`flex dark:bg-slate-500 hover:dark:bg-slate-400
        rounded-r justify-center pt-3 md:pt-4 border-l-2 border-slate-400
        w-14 h-14`}
          onClick={() => handleToggleSelfVideoMuted()}
        >
          <OnCamera videoMuted={videoMuted} />
        </button>
      </div>
      <ButtonName name={'Camera'} />
    </Wrapper>
  );
};
