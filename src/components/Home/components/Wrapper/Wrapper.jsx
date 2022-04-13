import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="max-w-7xl h-screen mx-auto py-6 px-4 sm:px-6 md:pt-20 lg:pt-28 lg:px-8 flex flex-col items-center">
      {children}
    </div>
  );
};
