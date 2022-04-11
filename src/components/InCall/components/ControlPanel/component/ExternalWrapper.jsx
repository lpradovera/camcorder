import React from "react";

export const ExternalWrapper = ({ children }) => {
  return (
    <div className="flex py-2 justify-center relative transparent">
      {children}
    </div>
  );
};
