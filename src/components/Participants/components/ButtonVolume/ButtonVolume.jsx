import React from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";

export const ButtonVolume = ({ member, onMemberUpdate }) => {
  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-700 rounded"
      onClick={() => {
        console.log(member.output_volume);
        if ((member.output_volume <= 0)) {
          onMemberUpdate({
            action: "unmute_volume",
            id: member.id,
            volume: 50,
          });
        } else {
          onMemberUpdate({
            action: "mute_volume",
            id: member.id,
            volume: -50,
          });
        }
      }}
    >
      {(member.output_volume >= 0) ? 
      <VolumeUp />
      : <VolumeOff /> }
    </button>
  );
};
