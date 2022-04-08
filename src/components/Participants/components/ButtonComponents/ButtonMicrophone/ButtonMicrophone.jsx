import React from "react";
import { Microphone } from "../../../../Icons/Microphone/Microphone";
import { useDispatch } from 'react-redux';
import {setAudioMuted} from '../../../../../features/deviceSlice'

export const ButtonMicrophone = ({ member, room }) => {
  const dispatch = useDispatch();

  const handleToggleAudioMute = async () => {
    if (Object.keys(room).length !== 0) {
      if (member.audio_muted) {
        await room.audioUnmute({ memberId: member.id });
        dispatch(setAudioMuted(false));
      } else {
        await room.audioMute({ memberId: member.id });
        dispatch(setAudioMuted(true));
      }
    }
  };

  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleAudioMute()}
    >
      {member.audio_muted ? (
        <div className="relative">
          <Microphone width={4} height={4} />
          <div className="border-r-2 h-6 border-slate-200 rotate-[-45deg] absolute top-[-4px] left-[7px]"></div>
        </div>
      ) : (
        <Microphone width={4} height={4}/>
      )}
    </button>
  );
};
