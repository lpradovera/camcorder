import React from "react";
import { Chevron } from "../../../../Icons/Chevron/Chevron";
import { ChevronLeft } from "../../../../Icons/ChevronLeft/ChevronLeft";

export const ButtonChevron = ({ handleHide, offset }) => {
  return (
    <div className="p-[24px] flex justify-between items-center">
      <button
        onClick={() => handleHide()}
        className={`md:hidden flex dark:bg-slate-600 h-10 w-10 hover:dark:bg-slate-400 rounded-full animate-pulse items-center absolute ${offset ? 'left-[-30px]' : 'left-[-10px]'} top-[20px]`}
      >
        {offset ? <ChevronLeft /> : <Chevron />}
      </button>
    </div>
  );
};
