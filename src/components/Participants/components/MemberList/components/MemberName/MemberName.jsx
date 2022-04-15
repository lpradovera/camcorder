import React from "react";

export const MemberName = ({ name }) => {
  return (
    <span className="text-slate-300 text-3xl md:text-lg pt-2 md:pt-1 pr-3">
      {name}
    </span>
  );
};
