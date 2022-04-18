import React from "react";
import { useDispatch } from "react-redux";
import {
  setVolumeMuted,
  setAudioMuted,
  audioMute,
  audioUnmute,
} from "../../../../../features/deviceSlice";
import {
  participantsDeaf,
  participantsUndeaf,
} from "../../../../../features/participantsSlice";
import { OnVolume } from './components/OnVolume/OnVolume';

export const ButtonVolume = ({ member }) => {
  const dispatch = useDispatch();
  
  const handleToggleDeaf = () => {
    if (member.deaf) {
      dispatch(participantsUndeaf({ memberId: member.id }));
      dispatch(setVolumeMuted(false));
      dispatch(setAudioMuted(false));
      dispatch(audioUnmute());
      
    } else {
      dispatch(participantsDeaf({ memberId: member.id }));
      dispatch(setVolumeMuted(true));
      dispatch(setAudioMuted(true));
      dispatch(audioMute());
    }
  };

  return (
    <button
      className="px-2 py-2 bg-slate-800 hover:bg-slate-900 rounded"
      onClick={() => handleToggleDeaf()}
    >
      <OnVolume deaf={member.deaf} />
    </button>
  );
};
