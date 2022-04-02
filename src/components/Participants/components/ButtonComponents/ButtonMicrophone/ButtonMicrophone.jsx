import React from "react";
import { Microphone } from "../../../../Icons/Microphone/Microphone";

export const ButtonMicrophone = ({ member, onMemberUpdate }) => {
  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-700 rounded"
      onClick={() => {
        if (member.audio_muted) {
          onMemberUpdate({
            action: "unmute_audio",
            id: member.id,
          });
        } else {
          onMemberUpdate({
            action: "mute_audio",
            id: member.id,
          });
        }
      }}
    >
      {member.audio_muted ? (
        <div className="relative">
          <Microphone />
          <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
        </div>
      ) : (
        <Microphone />
      )}
    </button>
  );
};
