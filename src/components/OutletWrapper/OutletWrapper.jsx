import React from "react";

export const OutletWrapper = ({children}) => {
  return (
    <main className="dark:bg-slate-700 mb-auto">
      {children}
    </main>
  );
};