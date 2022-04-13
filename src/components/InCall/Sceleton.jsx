import React from "react";
import { ExternalWrapper } from "./components/ControlPanel/component/ExternalWrapper";
export const Sceleton = () => {
  return (
    <ExternalWrapper>
      <div
        style={{ maxWidth: "900px" }}
        className="flex w-11/12 flex-wrap py-4 px-6 blur-sm opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto] rounded-lg bg-slate-600"
      >
        <div className="flex flex-col px-4 sm:px-1 pb-6 sm:pb-0">
          <div className="w-[91px] h-14 rounded bg-slate-500 animate-pulse"></div>
          <div className="w-[70px] h-4 rounded mt-3 ml-3 bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-4 sm:px-1 pb-6 sm:pb-0">
          <div className="w-[91px] h-14 rounded bg-slate-500 animate-pulse"></div>
          <div className="w-[70px] h-4 rounded mt-3 ml-3 bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-4 sm:px-1 pb-6 sm:pb-0">
          <div className="w-[91px] h-14 rounded bg-slate-500 animate-pulse"></div>
          <div className="w-[70px] h-4 rounded mt-3 ml-3 bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-1 pb-6 sm:pb-0">
          <div className="w-[60px] h-14 rounded  bg-slate-500 animate-pulse"></div>
          <div className="w-[55px] h-4 rounded mt-3 ml-[2px] bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-1 pb-0 sm:pb-0">
          <div className="w-[60px] h-14 rounded  bg-slate-500 animate-pulse"></div>
          <div className="w-[55px] h-4 rounded mt-3 ml-[2px] bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-1 pb-0 sm:pb-0">
          <div className="w-[60px] h-14 rounded  bg-slate-500 animate-pulse"></div>
          <div className="w-[55px] h-4 rounded mt-3 ml-[2px] bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-1 pb-0 sm:pb-0">
          <div className="w-[60px] h-14 rounded  bg-slate-500 animate-pulse"></div>
          <div className="w-[55px] h-4 rounded mt-3 ml-[2px] bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-1 pb-0 sm:pb-0">
          <div className="w-[60px] h-14 rounded  bg-slate-500 animate-pulse"></div>
          <div className="w-[55px] h-4 rounded mt-3 ml-[2px] bg-slate-500 animate-pulse"></div>
        </div>

        <div className="flex flex-col px-1 pb-0 sm:pb-0">
          <div className="w-[60px] h-14 rounded  bg-slate-500 animate-pulse"></div>
          <div className="w-[55px] h-4 rounded mt-3 ml-[2px] bg-slate-500 animate-pulse"></div>
        </div>
      </div>
    </ExternalWrapper>
  );
};
