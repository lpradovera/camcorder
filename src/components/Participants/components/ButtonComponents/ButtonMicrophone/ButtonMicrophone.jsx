import React from "react";
import { Microphone } from "../../../../Icons/Microphone/Microphone";
import { useDispatch } from "react-redux";
import { setAudioMuted } from "../../../../../features/deviceSlice";
import {
  participantsAudioUnmute,
  participantsAudioMute,
} from "../../../../../features/participantsSlice";

export const ButtonMicrophone = ({ member }) => {
  const dispatch = useDispatch();

  const handleToggleAudioMute = async () => {
    if (member.audio_muted) {
      dispatch(participantsAudioUnmute(member.id));
      dispatch(setAudioMuted(false));
    } else {
      dispatch(participantsAudioMute(member.id));
      dispatch(setAudioMuted(true));
    }
  };

  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleAudioMute()}
    >
      {member.audio_muted ? (
        <div className="relative">
          <Microphone width={4} height={4} />
          <div className="border-r-2 h-8 md:h-8 border-slate-200 rotate-[-45deg] absolute top-[-4px] md:top-[-4px] left-[11px] md:left-[10px]"></div>
        </div>
      ) : (
        <Microphone width={4} height={4} />
      )}
    </button>
  );
};
