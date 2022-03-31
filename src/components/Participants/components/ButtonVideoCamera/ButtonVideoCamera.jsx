import React from "react";
import { VideoCamera } from "../../../Icons/VideoCamera/VideoCamera";

export const ButtonVideoCamera = ({ member, onMemberUpdate }) => {
  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-700 rounded"
      onClick={() => {
        if (member.video_muted) {
          onMemberUpdate({
            action: "unmute_video",
            id: member.id,
          });
        } else {
          onMemberUpdate({
            action: "mute_video",
            id: member.id,
          });
        }
      }}
    >
      {member.video_muted ? (
        <div className="relative">
          <VideoCamera />
          <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
        </div>
      ) : (
        <VideoCamera />
      )}
    </button>
  );
};
