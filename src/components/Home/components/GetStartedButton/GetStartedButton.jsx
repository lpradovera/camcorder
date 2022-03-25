import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoRecordingSymbol } from "../../../VideoRecordingSymbol/VideoRecordingSymbol";

export const GetStartedButton = () => {
  let navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="hover:bg-slate-800 rounded-2xl flex items-center text-silver-100 bg-slate-900 px-6 py-3"
    >
      <VideoRecordingSymbol />
      <p className="ml-4 font-extrabold">Get Started</p>
    </button>
  );
};
