import React from "react";
import { useDispatch } from "react-redux";
import { setVideoMuted } from "../../../../../features/deviceSlice";
import {participantsVideoMute, participantsVideoUnmute} from '../../../../../features/participantsSlice';
import { OnVideoMuted } from './components/OnVideoMuted/OnVideoMuted'; 

export const ButtonVideoCamera = ({ member }) => {
  const dispatch = useDispatch();

  const handleToggleVideoMute = async () => {
      if (member.video_muted) {
        dispatch(participantsVideoUnmute(member.id))
        dispatch(setVideoMuted(false));
      } else {
        dispatch(participantsVideoMute(member.id))
        dispatch(setVideoMuted(true));
      }
  };

  return (
    <button
      className="px-2 py-2 md:px-2 md:py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleVideoMute()}
    >
      <OnVideoMuted videoMuted={member.video_muted} />
    </button>
  );
};
