import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col z-0 justify-center px-2 pb-4 relative">
      {children}
    </div>
  );
};
