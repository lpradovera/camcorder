import React from "react";

export const VideoRecordingSymbol = ({ position, bottom, right }) => {
  if (position) {
    return (
      <div
        className={`${
          position && position
        } z-10 bottom-${bottom} hidden xs:flex right-${right} animate-pulse border-2 border-red-600 rounded-full w-6 h-6 flex flex-col items-center justify-center`}
      >
        <div className="rounded-full w-4 h-4 bg-red-600"></div>
        {/* <p className="text-slate-300 absolute bottom-[-5px] right-7">REC...</p> */}
      </div>
    );
  }
  return (
    <div className="animate-pulse border-4 border-red-600 rounded-full w-8 h-8 flex flex-col items-center justify-center">
      <div className="rounded-full w-4 h-4 bg-red-600"></div>
    </div>
  );
};
