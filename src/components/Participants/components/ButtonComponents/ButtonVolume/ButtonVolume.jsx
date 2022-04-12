import React from "react";
import { VolumeUp } from "../../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../../Icons/VolumeOff/VolumeOff";
import { useDispatch } from "react-redux";
import {
  setVolumeMuted,
  setAudioMuted,
} from "../../../../../features/deviceSlice";
import {
  participantsDeaf,
  participantsUndeaf,
} from "../../../../../features/participantsSlice";
import { OnVolume } from './components/OnVolume/OnVolume';

export const ButtonVolume = ({ member }) => {
  const dispatch = useDispatch();

  const handleToggleDeaf = async () => {
    if (member.deaf) {
      dispatch(participantsUndeaf({ memberId: member.id }));
      dispatch(setVolumeMuted(false));
      dispatch(setAudioMuted(false));
    } else {
      dispatch(participantsDeaf({ memberId: member.id }));
      dispatch(setVolumeMuted(true));
      dispatch(setAudioMuted(true));
    }
  };

  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleDeaf()}
    >
      <OnVolume deaf={member.deaf} />
    </button>
  );
};
