import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonName } from '../ButtonName/ButtonName';
import { OnSpeaker } from './components/OnSpeaker/OnSpeaker';
import {Wrapper} from './components/Wrapper/Wrapper';
import {
  getSpeakers,
  setAudioMuted,
  audioMute,
  audioUnmute,
  roomDeaf,
  roomUndeaf,
  setVolumeMuted,
} from "../../../../features/deviceSlice";
import { isEmpty } from "../../../../helpers/helpers";
import {ChangeSpeaker} from './components/ChangeSpeaker/ChangeSpeaker';

export const SpeakerButton = () => {
  const dispatch = useDispatch();
  const volumeMuted = useSelector((state) => state?.device?.volumeMuted);
  const room = useSelector((state) => state.room.room);

  const handleToggleDeaf = async () => {
    dispatch(getSpeakers());
    if(isEmpty(room)) return
    if (volumeMuted) {
      dispatch(roomUndeaf());
      dispatch(audioUnmute());
      dispatch(setAudioMuted(false));
      dispatch(setVolumeMuted(false));
    } else {
      dispatch(roomDeaf());
      dispatch(audioMute());
      dispatch(setVolumeMuted(true));
      dispatch(setAudioMuted(true));
    }
  };


  return (
    <Wrapper>
      <div className="flex">
        <ChangeSpeaker />

        <div className="flex justify-center">
          <button
            className='flex dark:bg-slate-500 hover:dark:bg-slate-400
          rounded-r justify-center pt-4 border-l-2 border-slate-400
          w-14 h-14'
            onClick={() => handleToggleDeaf()}
          >
            <OnSpeaker volumeMuted={volumeMuted} />
          </button>
        </div>
      </div>
      <ButtonName name={'Speaker'} />
    </Wrapper>
  );
};
