import React from "react";

export const ParticipantsWrapper = ({ children, offset }) => {
  return (
    <div
      className={`right-0 transition-[right] duration-300
      ${
        !offset ? null : "animate-pulse"
      } dark:bg-slate-700 shadow-xl absolute ${
        offset ? "w-[25px]" : "w-[37%]"
      } h-screen`}
    >
      {children}
    </div>
  );
};
