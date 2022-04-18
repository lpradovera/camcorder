import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudioMuted } from "../../../../../features/deviceSlice";
import {
  participantsAudioUnmute,
  participantsAudioMute,
} from "../../../../../features/participantsSlice";
import { OnMicrophone } from './components/OnMicrophone/OnMicrophone';

export const ButtonMicrophone = ({ member }) => {
  const dispatch = useDispatch();
  const audioMuted = useSelector(state => state.device.audioMuted);

  const handleToggleAudioMute = () => {
    if (member.audio_muted) {
      dispatch(participantsAudioUnmute(member.id));
      dispatch(setAudioMuted(false));
    } else {
      dispatch(participantsAudioMute(member.id));
      dispatch(setAudioMuted(true));
    }
  };

  return (
    <button
      className="px-2 py-2 bg-slate-800 hover:bg-slate-900 rounded"
      onClick={() => handleToggleAudioMute()}
    >
      <OnMicrophone audioMuted={member.audio_muted} />
    </button>
  );
};
