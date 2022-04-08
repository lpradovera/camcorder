import React, {useEffect} from "react";
import { VolumeUp } from "../../../../Icons/VolumeUp/VolumeUp";
import { VolumeOff } from "../../../../Icons/VolumeOff/VolumeOff"; 
import { useDispatch } from "react-redux";
import { setVolumeMuted, setAudioMuted } from "../../../../../features/deviceSlice";

export const ButtonVolume = ({ room, member }) => {
  const dispatch = useDispatch();

  const handleToggleDeaf = async () => {
    if (Object.keys(room).length !== 0) {
      if (member.deaf) {
        await room.undeaf({ memberId: member.id });
        dispatch(setVolumeMuted(false));
        dispatch(setAudioMuted(false));
      } else {
        await room.deaf({ memberId: member.id });
        dispatch(setVolumeMuted(true));
        dispatch(setAudioMuted(true));
      }
    }
  };

  useEffect(() => {
    console.log(member.deaf, 'deaf')
  }, [member])

  return (
    <button
      className="px-2 py-2 dark:bg-slate-800 dark:hover:bg-slate-900 rounded"
      onClick={() => handleToggleDeaf()}
    >
      {member.deaf ? 
      <VolumeOff width={4} height={4} />
      : <VolumeUp width={4} height={4}/> }
    </button>
  );
};
