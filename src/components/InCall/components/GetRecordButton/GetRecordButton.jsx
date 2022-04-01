import React from "react";
import { Save } from "../../../Icons/Save/Save";

export const GetRecordButton = ({recordingReady}) => {
  return (
    <div className="flex flex-col justify-center px-2 pb-4">
      <button
        className={`flex dark:bg-slate-500 ${
          recordingReady && "hover:dark:bg-slate-400"
        } rounded justify-center pt-4 w-14 h-14`}
      >
        {recordingReady ? (
          <Save recordingReady={recordingReady} />
        ) : (
          <div className="relative">
            <Save />
            <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
          </div>
        )}
      </button>
      <p className="text-center pt-1 text-slate-300">Save</p>
    </div>
  );
};
