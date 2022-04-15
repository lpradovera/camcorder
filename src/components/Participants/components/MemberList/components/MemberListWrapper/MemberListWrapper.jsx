import React from "react";

export const MemberListWrapper = ({ children }) => {
  return (
    <div className="shadow-lg mb-2 rounded-lg py-2 px-2 bg-slate-700">
      {children}
    </div>
  );
};
