import React from "react";

export const ParticipantsWrapper = ({ children, offset }) => {
  return (
    <div style={{ minHeight: '100vh'}}
      className={`right-0 absolute md:static 
      md:w-3/12
    dark:bg-slate-700
        ${offset ? "w-[0px]" : "w-full"}
        `}
    >
      {children}
    </div>
  );
};
