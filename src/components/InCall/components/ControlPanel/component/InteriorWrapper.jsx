import React from "react";
import { useSelector } from "react-redux";

export const InteriorWrapper = ({ children }) => {
  const record = useSelector((state) => state.recording.record);

  return (
    <div
      style={{ maxWidth: "900px" }}
      className={`flex w-11/12 ${
        record ? "border-2 border-red-600" : "border-2 border-transparent"
      } flex-wrap pt-2 pl-6 pr-6 opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto]  rounded-lg bg-slate-600`}
    >
      {children}
    </div>
  );
};
