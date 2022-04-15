import React from "react";
import { ExternalWrapper } from "./components/ControlPanel/component/ExternalWrapper";
export const Sceleton = ({ mod }) => {
  return (
    <ExternalWrapper>
      <div
        style={{ maxWidth: "900px" }}
        className="flex w-11/12 flex-wrap py-4 px-8 blur-sm opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto] rounded-lg bg-slate-600"
      >
        <div className="flex flex-col blur-sm animate-pulse relative px-2 pb-4  opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto] rounded-lg bg-slate-600">
          <div className="flex flex-col">
            <div
              className="flex bg-slate-500 hover:bg-slate-400
        rounded-r justify-center pt-3 md:pt-4 border-l-2 border-slate-400
        w-20 h-14"
            ></div>
            <div className="w-[70px] h-4 rounded mt-3 ml-1 bg-slate-500 animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col blur-sm animate-pulse relative px-2 pb-4  opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto] rounded-lg bg-slate-600">
          <div className="flex flex-col">
            <div
              className="flex bg-slate-500 hover:bg-slate-400
        rounded-r justify-center pt-3 md:pt-4 border-l-2 border-slate-400
        w-20 h-14"
            ></div>
            <div className="w-[70px] h-4 rounded mt-3 ml-1 bg-slate-500 animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col blur-sm animate-pulse relative px-2 pb-4  opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto] rounded-lg bg-slate-600">
          <div className="flex flex-col">
            <div
              className="flex bg-slate-500 hover:bg-slate-400
        rounded-r justify-center pt-3 md:pt-4 border-l-2 border-slate-400
        w-20 h-14"
            ></div>
            <div className="w-[70px] h-4 rounded mt-3 ml-1 bg-slate-500"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-2 pb-4 animate-pulse relative">
          <div className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"></div>
          <div className="w-[56px] h-4 rounded mt-3 ml-0 bg-slate-500"></div>
        </div>

        <div className="flex flex-col justify-center px-2 pb-4 animate-pulse relative">
          <div className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"></div>
          <div className="w-[56px] h-4 rounded mt-3 ml-0 bg-slate-500"></div>
        </div>

        <div className="flex flex-col justify-center px-2 pb-4 animate-pulse relative">
          <div className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"></div>
          <div className="w-[56px] h-4 rounded mt-3 ml-0 bg-slate-500"></div>
        </div>

        {mod ? (
          <div className="flex flex-col justify-center px-2 pb-4 animate-pulse relative">
            <div className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"></div>
            <div className="w-[56px] h-4 rounded mt-3 ml-0 bg-slate-500"></div>
          </div>
        ) : null}

        {mod ? (
          <div className="flex flex-col justify-center px-2 pb-4 animate-pulse relative">
            <div className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"></div>
            <div className="w-[56px] h-4 rounded mt-3 ml-0 bg-slate-500"></div>
          </div>
        ) : null}

        {mod ? (
          <div className="flex flex-col justify-center px-2 pb-4 animate-pulse relative">
            <div className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"></div>
            <div className="w-[56px] h-4 rounded mt-3 ml-0 bg-slate-500"></div>
          </div>
        ) : null}
      </div>
    </ExternalWrapper>
  );
};
