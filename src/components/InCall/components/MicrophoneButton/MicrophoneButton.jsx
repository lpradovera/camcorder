import React, { useEffect } from "react";
import { Microphone } from "../../../Icons/Microphone/Microphone";
import { useDispatch, useSelector } from "react-redux";
import {
  getMicrophone,
  setAudioMuted,
  audioMute,
  audioUnmute,
} from "../../../../features/deviceSlice";
import { isEmpty } from '../../../../helpers/helpers';
import { ChangeMicrophone } from './components/ChangeMicrophone/ChangeMicrophone';

export const MicrophoneButton = () => {
  const dispatch = useDispatch();
  const audioMuted = useSelector((state) => state?.device?.audioMuted);
  const room = useSelector(state => state.room.room);

  const handleToggleSelfAudioMuted = async () => { 
    dispatch(getMicrophone());
    if(isEmpty(room)) return
      if (audioMuted) {
        dispatch(audioUnmute());
        dispatch(setAudioMuted(false));
      } else {
        dispatch(audioMute());
        dispatch(setAudioMuted(true));
      }
  };

  useEffect(() => {
    dispatch(getMicrophone());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center relative px-2 pb-4">
      <div className="flex">
        <ChangeMicrophone />
        <button
          className={`flex dark:bg-slate-500 hover:dark:bg-slate-400
          rounded-r justify-center pt-4 border-l-2 border-slate-400
          w-14 h-14`}
          onClick={() => handleToggleSelfAudioMuted()}
        >
          {audioMuted ? (
            <div className="relative">
              <Microphone />
              <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
            </div>
          ) : (
            <Microphone />
          )}
        </button>
      </div>

      <p className="text-center pt-1 text-slate-300">Microphone</p>
    </div>
  );
};
