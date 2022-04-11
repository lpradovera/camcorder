import React, { useEffect } from "react";
import { Microphone } from "../../../Icons/Microphone/Microphone";
import { useDispatch, useSelector } from "react-redux";
import {
  getMicrophone,
  updateMicrophone,
  setAudioMuted,
  audioMute,
  audioUnmute,
} from "../../../../features/deviceSlice";
import { isEmpty } from '../../../../helpers/helpers';

export const MicrophoneButton = () => {
  const dispatch = useDispatch();
  const microphones = useSelector((state) => state?.device?.microphones);
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

  const handleChangeMicrophone = (e) => {
    dispatch(getMicrophone());
    dispatch(updateMicrophone(e.target.value));
  };

  useEffect(() => { 
    dispatch(getMicrophone());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center relative px-2 pb-4">
      <div className="flex">
        <select
          onChange={(e) => handleChangeMicrophone(e)}
          className={`flex w-8 h-14 outline-none chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
        >
          {microphones &&
            microphones.map((mic) => {
              return (
                <option key={mic?.deviceId} value={mic?.deviceId}>
                  {mic?.label}
                </option>
              );
            })}
        </select>

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
