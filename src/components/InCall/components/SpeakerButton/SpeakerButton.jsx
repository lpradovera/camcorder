import React, { useEffect } from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpeakers,
  updateSpeakers,
  setAudioMuted,
  audioMute,
  audioUnmute,
  roomDeaf,
  roomUndeaf,
  setVolumeMuted,
} from "../../../../features/deviceSlice";
import {isEmpty } from '../../../../helpers/helpers';

export const SpeakerButton = () => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state?.device?.speakers);
  const volumeMuted = useSelector((state) => state?.device?.volumeMuted);
  const room = useSelector(state => state.room.room);

  const handleToggleDeaf = async () => {
    if (isEmpty(room)) return
    dispatch(getSpeakers());
      if (volumeMuted) {
        dispatch(roomUndeaf());
        dispatch(audioUnmute())
        dispatch(setAudioMuted(false));
        dispatch(setVolumeMuted(false));
      } else {
        dispatch(roomDeaf());
        dispatch(audioMute());
        dispatch(setVolumeMuted(true));
        dispatch(setAudioMuted(true));
      }
  };

  const handleChangeSpeakers = async (e) => {
    if (isEmpty(room)) return
    dispatch(updateSpeakers(e.target.value));
  };

  useEffect(() => {
    if (isEmpty(room)) return
    dispatch(getSpeakers());
  }, [dispatch]);

  return (
    <div className="flex flex-col relative px-2 pb-4">
      <div className="flex">
        <select
          onClick={() => dispatch(getSpeakers())}
          onChange={(e) => handleChangeSpeakers(e)}
          className={`flex w-8 h-14 outline-none chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
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
