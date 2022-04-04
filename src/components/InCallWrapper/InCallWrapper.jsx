import React from "react";

export const InCallWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden dark:bg-slate-700 relative">
      {children}
    </div>
  );
};
