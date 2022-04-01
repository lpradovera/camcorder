import React, {useEffect} from "react";
import { VolumeUp } from "../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../Icons/VolumeOff/VolumeOff";
import { useNavigate } from "react-router-dom";

export const VolumeButton = ({room}) => {

  useEffect(() => {
    console.log('Test, volume button does not work');
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <button
        className="flex dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onClick={() => {
          console.log('Does not work');
        }}
      >
        {false ? (
          <div className="relative">
            <VolumeUp />
            <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
          </div>
        ) : (
          <VolumeOff />
        )}
      </button>
      <p className="text-center pt-1 text-slate-300">Speaker</p>
    </div>
  );
};
