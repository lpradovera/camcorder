import React from "react";

export const AppWrapper = ({children}) => {
  return (
    <div className="bg-slate-600 bg-slate-600
    flex flex-col h-screen justify-between
    ">
      {children}
    </div>
  );
};
