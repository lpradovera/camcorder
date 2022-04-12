import React from "react";

export const MemberListWrapper = ({ children }) => {
  return (
    <div className="shadow-lg mb-2 rounded-lg py-2 px-2 dark:bg-slate-700">
      {children}
    </div>
  );
};
