import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLayout, setLayout } from "../../../../features/layoutSlice";
import { isEmpty } from "../../../../helpers/helpers";
import { ButtonName } from "../ButtonName/ButtonName";

export const LayoutButton = () => {
  const dispatch = useDispatch();
  const layouts = useSelector((state) => state?.layout?.layout);
  const room = useSelector((state) => state.room.room);
  return (
    <div
      onMouseEnter={() => {
        if (isEmpty(room)) return;
        dispatch(getLayout());
      }}
      className="flex flex-col z-0 justify-center px-2 pb-4 relative"
    >
      <select
        className="flex form-select outline-none layout-bg appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onChange={async (e) => {
          if (isEmpty(room)) return;
          dispatch(setLayout(e.target.value));
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
      <ButtonName name={"Layout"} />
    </div>
  );
};
