import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {OnMicrophone} from './components/OnMicrophone/OnMicrophone';
import { ButtonName } from '../ButtonName/ButtonName';
import {
  getMicrophone,
  setAudioMuted,
  audioMute,
  audioUnmute,
} from "../../../../features/deviceSlice";
import { Wrapper } from './components/Wrapper/Wrapper';
import { isEmpty } from '../../../../helpers/helpers';
import { ChangeMicrophone } from './components/ChangeMicrophone/ChangeMicrophone';

export const MicrophoneButton = () => {
  const dispatch = useDispatch();
  const audioMuted = useSelector((state) => state?.device?.audioMuted);
  const room = useSelector(state => state.room.room);

  const handleToggleSelfAudioMuted = async () => { 
    dispatch(getMicrophone());
    if(isEmpty(room)) return
      if (audioMuted) {
        dispatch(audioUnmute());
        dispatch(setAudioMuted(false));
      } else {
        dispatch(audioMute());
        dispatch(setAudioMuted(true));
      }
  };

  useEffect(() => {
    dispatch(getMicrophone());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="flex">
        <ChangeMicrophone />
        <button
          className='flex bg-slate-500 hover:bg-slate-400
          rounded-r justify-center pt-4 border-l-2 border-slate-400
          w-14 h-14'
          onClick={() => handleToggleSelfAudioMuted()}
        >
          <OnMicrophone audioMuted={audioMuted} />
        </button>
      </div>
      <ButtonName name={'Microphone'} />
    </Wrapper>
  );
};
