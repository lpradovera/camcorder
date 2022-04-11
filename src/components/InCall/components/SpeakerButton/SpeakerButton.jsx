import React from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpeakers,
  setAudioMuted,
  audioMute,
  audioUnmute,
  roomDeaf,
  roomUndeaf,
  setVolumeMuted,
} from "../../../../features/deviceSlice";
import { isEmpty } from "../../../../helpers/helpers";
import {ChangeSpeaker} from './components/ChangeSpeaker/ChangeSpeaker';

export const SpeakerButton = () => {
  const dispatch = useDispatch();
  const volumeMuted = useSelector((state) => state?.device?.volumeMuted);
  const room = useSelector((state) => state.room.room);

  const handleToggleDeaf = async () => {
    dispatch(getSpeakers());
    if(isEmpty(room)) return
    if (volumeMuted) {
      dispatch(roomUndeaf());
      dispatch(audioUnmute());
      dispatch(setAudioMuted(false));
      dispatch(setVolumeMuted(false));
    } else {
      dispatch(roomDeaf());
      dispatch(audioMute());
      dispatch(setVolumeMuted(true));
      dispatch(setAudioMuted(true));
    }
  };


  return (
    <div className="flex flex-col relative px-2 pb-4">
      <div className="flex">
        <ChangeSpeaker />

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
