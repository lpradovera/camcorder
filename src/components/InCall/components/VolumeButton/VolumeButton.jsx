import React, {useEffect} from "react";
import { Volume } from "../../../Icons/Volume/Volume";

export const VolumeButton = ({videoStream, videoMuted}) => {

  useEffect(() => {
    console.log('Test, volume button does not work');
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <button
        className="flex dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onClick={() => videoStream()}
      >
        {videoMuted ? (
          <div className="relative">
            <Volume />
            <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
          </div>
        ) : (
          <Volume />
        )}
      </button>
      <p className="text-center pt-1 text-slate-300">Speaker</p>
    </div>
  );
};
