import React from "react";
import { Microphone } from "../../../../Icons/Microphone/Microphone";
import { handleToggleAudioMute } from "../../../../../helpers/helpers";

export const ButtonMicrophone = ({ member, room, setAudioMuted }) => {
  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleAudioMute(member, room, setAudioMuted)}
    >
      {member.audio_muted ? (
        <div className="relative">
          <Microphone width={4} height={4} />
          <div className="border-r-2 h-6 border-slate-200 rotate-[-45deg] absolute top-[-4px] left-[7px]"></div>
        </div>
      ) : (
        <Microphone width={4} height={4}/>
      )}
    </button>
  );
};
