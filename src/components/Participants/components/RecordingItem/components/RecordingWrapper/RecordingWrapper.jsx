import React from "react";

export const RecordingWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between text-2xl md:text-base pb-7">
      {children}
    </div>
  );
};
