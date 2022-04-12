import React from "react";

export const Button = ({ recordingReady, children }) => {
  return (
    <button
      className={`flex dark:bg-slate-500 ${
        recordingReady && "hover:dark:bg-slate-400"
      } rounded justify-center pt-4 w-14 h-14`}
    >
      {children}
    </button>
  );
};
