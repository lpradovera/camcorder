import React from "react";
import { Save } from "../../../../../Icons/Save/Save";

export const OnRecording = ({ recordingReady }) => {
  return (
    <>
      {recordingReady ? (
        <Save recordingReady={recordingReady} />
      ) : (
        <div className="relative">
          <Save />
          <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
        </div>
      )}
    </>
  );
};
