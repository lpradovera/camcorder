import React, { useEffect, useState } from "react";
import { Microphone } from "../../../Icons/Microphone/Microphone";
import { useDispatch, useSelector } from "react-redux";
import {
  getMicrophone,
  updateMicrophone,
} from "../../../../features/deviceSlice";
import { ChevronUp } from "../../../Icons/ChevronUp/ChevronUp";

export const MicrophoneButton = ({ room, setAudioMuted, audioMuted }) => {
  const dispatch = useDispatch();
  const microphones = useSelector((state) => state?.device?.microphones);
  const [view, setView] = useState(false);

  const handleToggleSelfAudioMuted = async () => {
    dispatch(getMicrophone());
    if (Object.keys(room).length !== 0) {
      if (audioMuted) {
        await room?.audioUnmute();
        setAudioMuted(false);
      } else {
        await room?.audioMute();
        setAudioMuted(true);
      }
    }
  };

  const handleChangeMicrophone = (e) => {
    dispatch(getMicrophone());
    dispatch(updateMicrophone({ room, id: e.target.value }));
  };

  useEffect(() => {
    dispatch(getMicrophone());
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
            onChange={(e) => handleChangeMicrophone(e)}
            className={`flex w-14 h-4 absolute top-0 form-select appearance-none text-transparent ${
              view ? "dark:bg-slate-300 animate-pulse" : "dark:bg-slate-500"
            } rounded`}
          >
            {microphones.map((mic) => {
              return (
                <option key={mic.deviceId} value={mic.deviceId}>
                  {mic.label}
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
      <p className="text-center pt-1 text-slate-300">Mic</p>
    </div>
  );
};
