import React from "react";
import { VideoCamera } from "../../../../Icons/VideoCamera/VideoCamera";
import { useDispatch } from "react-redux";
import { setVideoMuted } from "../../../../../features/deviceSlice";

export const ButtonVideoCamera = ({ room, member }) => {
  const dispatch = useDispatch();

  const handleToggleVideoMute = async () => {
    if (Object.keys(room).length !== 0) {
      if (member.video_muted) {
        await room.videoUnmute({ memberId: member.id });
        dispatch(setVideoMuted(false));
      } else {
        await room.videoMute({ memberId: member.id });
        dispatch(setVideoMuted(true));
      }
    }
  };

  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleVideoMute()}
    >
      {member.video_muted ? (
        <div className="relative">
          <VideoCamera width={6} height={6} />
          <div className="border-r-2 h-6 border-slate-200 rotate-[-45deg] absolute top-[-1px] left-[10px]"></div>
        </div>
      ) : (
        <VideoCamera width={6} height={6} />
      )}
    </button>
  );
};
