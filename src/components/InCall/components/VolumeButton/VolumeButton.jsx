import React, { useState, useEffect } from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";
import { ChevronUp } from "../../../Icons/ChevronUp/ChevronUp";
import { useDispatch, useSelector } from "react-redux";
import { getSpeakers, updateSpeakers, setAudioMuted, setVolumeMuted } from "../../../../features/deviceSlice";

export const VolumeButton = ({ room }) => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state?.device?.speakers);
  const volumeMuted = useSelector((state) => state?.device?.volumeMuted);

  const handleToggleDeaf = async () => {
    dispatch(getSpeakers());
    if (Object.keys(room).length !== 0) {
      if (volumeMuted) {
        await room.undeaf();
        dispatch(setAudioMuted(false))
        dispatch(setVolumeMuted(false));
      } else {
        await room.deaf();
        await room.audioMute();
        dispatch(setVolumeMuted(true));
        dispatch(setAudioMuted(true))
      }
    }
  };

  const handleChangeSpeakers = async (e) => {
    dispatch(updateSpeakers({ room, id: e.target.value }));
  };

  useEffect(() => {
    dispatch(getSpeakers());
  }, [dispatch]);

  return (
    <div
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
      className="flex flex-col relative px-2 pb-4"
    >
      {view ? (
        <>
          <ChevronUp right='30'/>
          <select
            onClick={() => dispatch(getSpeakers())}
            onChange={(e) => handleChangeSpeakers(e)}
            className={`flex w-14 h-4 absolute top-0 right-[11px] form-select appearance-none text-transparent ${
              view ? "dark:bg-slate-300 animate-pulse" : "dark:bg-slate-500"
            } rounded`}
          >
            {speakers && speakers.map((speaker) => {
              return (
                <option key={speaker.deviceId} value={speaker.deviceId}>
                  {speaker.label} 
                </option>
              );
            })}
          </select>
        </>
      ) : null}
      <div className="flex justify-center">
        <button
          className={`flex ${
            view ? "dark:bg-slate-400" : "dark:bg-slate-500"
          }  rounded justify-center ${
            view ? "pt-6" : "pt-4"
          } w-14 h-14 transition-all`}
          onClick={() => handleToggleDeaf()}
        >
          {volumeMuted ? <VolumeOff /> : <VolumeUp />}
        </button>
      </div>

      <p className="text-center pt-1 text-slate-300">Speaker</p>
    </div>
  );
};
