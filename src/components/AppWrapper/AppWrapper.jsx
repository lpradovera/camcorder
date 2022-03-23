import React from "react";

export const AppWrapper = ({children}) => {
  return (
    <div className="dark:bg-slate-600
    flex flex-col h-screen justify-between
    ">
      {children}
    </div>
  );
};
