import React from "react";
import { Chevron } from "../../../Icons/Chevron/Chevron";
import { ChevronLeft } from "../../../Icons/ChevronLeft/ChevronLeft";

export const ButtonChevron = ({ handleHide, offset }) => {
  return (
    <div className="p-[24px] flex justify-between items-center">
      <button
        onClick={() => handleHide()}
        className={`flex dark:bg-slate-600 hover:dark:bg-slate-400 rounded-full items-center absolute left-[-10px] xs:left-[-20px] top-[20px]`}
      >
        {offset ? <ChevronLeft /> : <Chevron />}
      </button>
    </div>
  );
};
