import React, { useEffect, useState } from "react";

export const LayoutButton = ({ room, curLayout, setCurLayout }) => {
  const [layouts, setLayouts] = useState([]);

  const getLayout = async () => {
    setLayouts((await room.getLayouts()).layouts);
  };

  useEffect( () => {
    if (Object.keys(room).length !== 0) {
      getLayout();
    }
  }, [curLayout]);

  

  return (
    <div className="flex flex-col z-0 justify-center px-2 pb-4 relative">
      <select
        className="flex form-select layout-bg appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onChange={async (e) => {
          console.log("Layout: ", e.target.value);
          await room.setLayout({ name: e.target.value });
          setCurLayout(e.target.value);
        }}
      >
        {layouts?.length > 1 &&
          layouts.map((layout) => {
            return (
              <option key={layout} value={layout} className="text-slate-100">
                {layout}
              </option>
            );
          })}
      </select>

      <p className="text-center pt-1 text-slate-300">Layout</p>
    </div>
  );
};
