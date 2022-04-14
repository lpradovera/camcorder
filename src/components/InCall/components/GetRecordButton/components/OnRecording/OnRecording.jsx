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
          <div className="border-r-2 h-8 border-slate-200 rotate-[-55deg] absolute top-[-3px] left-[11px]"></div>
        </div>
      )}
    </>
  );
};
