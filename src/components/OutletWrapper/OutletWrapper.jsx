import React from "react";

export const OutletWrapper = ({children}) => {
  return (
    <main className="dark:bg-slate-600">
      {children}
    </main>
  );
};