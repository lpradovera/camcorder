import React, { useState, useEffect } from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpeakers,
  updateSpeakers,
  setAudioMuted,
  setVolumeMuted,
} from "../../../../features/deviceSlice";

export const VolumeButton = ({ room }) => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state?.device?.speakers);
  const volumeMuted = useSelector((state) => state?.device?.volumeMuted);

  const handleToggleDeaf = async () => {
    dispatch(getSpeakers());
    if (Object.keys(room).length !== 0) {
      if (volumeMuted) {
        await room.undeaf();
        dispatch(setAudioMuted(false));
        dispatch(setVolumeMuted(false));
      } else {
        await room.deaf();
        await room.audioMute();
        dispatch(setVolumeMuted(true));
        dispatch(setAudioMuted(true));
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
    <div className="flex flex-col relative px-2 pb-4">
      <div className="flex">
        <select
          onClick={() => dispatch(getSpeakers())}
          onChange={(e) => handleChangeSpeakers(e)}
          className={`flex w-8 h-14 chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
        >
          {speakers &&
            speakers.map((speaker) => {
              return (
                <option key={speaker.deviceId} value={speaker.deviceId}>
                  {speaker.label}
                </option>
              );
            })}
        </select>

        <div className="flex justify-center">
        <button
          className={`flex dark:bg-slate-500 hover:dark:bg-slate-400
          rounded-r justify-center pt-4 border-l-2 border-slate-400
          w-14 h-14`}
          onClick={() => handleToggleDeaf()}
        >
          {volumeMuted ? <VolumeOff /> : <VolumeUp />}
        </button>
      </div>
      </div>

      

      <p className="text-center pt-1 text-slate-300">Speaker</p>
    </div>
  );
};
