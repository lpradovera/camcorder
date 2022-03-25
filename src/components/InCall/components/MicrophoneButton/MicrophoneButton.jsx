import React from "react";
import { Microphone } from "../../../Icons/Microphone/Microphone";

export const MicrophoneButton = ({ room, setAudioMuted, audioMuted }) => {
  return (
    <div className="flex flex-col justify-center">
      <button
        className="flex dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onClick={() => {
          if(audioMuted) {
            room.audioUnmute();
            setAudioMuted(false);
          } else {
            room.audioMute();
            setAudioMuted(true);
          }
        }}
      >
        {audioMuted ? (
          <div className="relative">
            <Microphone />
            <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
          </div>
        ) : (
          <Microphone />
        )}
      </button>
      <p className="text-center pt-1 text-slate-300">Mic</p>
    </div>
  );
};
