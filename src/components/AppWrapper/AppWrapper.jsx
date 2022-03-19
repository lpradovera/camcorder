import React from "react";

export const AppWrapper = ({children}) => {
  return (
    <div className="dark:bg-slate-600 px-5 py-5">
      {children}
    </div>
  );
};
