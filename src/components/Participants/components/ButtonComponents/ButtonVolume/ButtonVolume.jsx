import React from "react";
import { VolumeUp } from "../../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../../Icons/VolumeOff/VolumeOff";
import { handleToggleDeaf } from '../../../../../helpers/helpers';  

export const ButtonVolume = ({ room, member }) => {

  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleDeaf(room, member)}
    >
      {(member.deaf) ? 
      <VolumeOff width={4} height={4} />
      : <VolumeUp width={4} height={4}/> }
    </button>
  );
};
