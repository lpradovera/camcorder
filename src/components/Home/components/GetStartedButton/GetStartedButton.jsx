import React from "react";
import { useNavigate } from "react-router-dom";

export const GetStartedButton = () => {
  let navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="hover:bg-slate-800 rounded-2xl flex items-center text-silver-100 bg-slate-900 px-6 py-3"
    >
      <div className="animate-pulse border-4 border-red-600 rounded-full w-8 h-8 flex flex-col items-center justify-center">
        <div className="rounded-full w-4 h-4 bg-red-600"></div>
      </div>
      <p className="ml-4 font-extrabold">Get Started</p>
    </button>
  );
};
