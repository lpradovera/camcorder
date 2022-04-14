import React from "react";
import { useSelector } from "react-redux";


export const LayoutItems = () => {
  const layouts = useSelector((state) => state.layout.layout);
  return (
    <>
      {layouts &&
        layouts.length > 1 &&
        layouts.map((layout) => {
          return (
            <option key={layout} value={layout} className="text-slate-100">
              {layout}
            </option>
          );
        })}
    </>
  );
};
