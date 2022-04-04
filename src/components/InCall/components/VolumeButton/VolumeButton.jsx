import React, { useEffect } from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";

export const VolumeButton = ({ room, setVolumeMuted, volumeMuted }) => {
  const handleToggleDeaf = async () => {
    if (volumeMuted) {
      await room.deaf();
      setVolumeMuted(false);
    } else {
      await room.undeaf();
      await room.audioMute();
      setVolumeMuted(true);
    }
  };

  return (
    <div className="flex flex-col justify-center px-2 pb-4">
      <button
        className="flex dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onClick={() => handleToggleDeaf()}
      >
        {volumeMuted ? <VolumeUp /> : <VolumeOff />}
      </button>
      <p className="text-center pt-1 text-slate-300">Speaker</p>
    </div>
  );
};
