import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { setRecord } from "../../../../features/recordingSlice";
import { isEmpty } from '../../../../helpers/helpers';
import { Wrapper } from './components/Wrapper/Wrapper';
import { RecCircle } from './components/RecCircle/RecCircle';
import { ButtonName } from '../ButtonName/ButtonName';

export const RecordingButton = ({startRecording}) => {
  const dispatch = useDispatch();
  const record = useSelector(state => state?.recording?.record);
  const room = useSelector(state => state.room.room);

  const recordToggle = () => {
    if (isEmpty(room)) return
    dispatch(setRecord(!record));
  }


  return (
    <Wrapper>
      <button
        className={`flex ${
          record
            ? "bg-slate-100"
            : "dark:bg-slate-500 hover:dark:bg-slate-400"
        } rounded justify-center pt-3 w-14 h-14`}
        onClick={() => {
          startRecording();
          recordToggle();
        }}
      >
        <RecCircle record={record} />
      </button>
      <ButtonName name={'Record'} />
    </Wrapper>
  );
};
