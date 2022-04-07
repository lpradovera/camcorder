import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { setRecord } from "../../../../features/recordingSlice";

export const RecordingButton = ({startRecording}) => {
  const dispatch = useDispatch();
  const record = useSelector(state => state?.recording?.record);

  const recordToggle = () => {
    dispatch(setRecord(!record));
  }


  return (
    <div className="flex flex-col justify-center px-2 pb-4">
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
        {record ? (
          <div className="animate-pulse border-4 border-red-600 rounded-full w-8 h-8 flex flex-col items-center justify-center">
            <div className="rounded-full w-5 h-5 bg-red-600"></div>
          </div>
        ) : (
          <div className="border-4 border-slate-100 rounded-full w-8 h-8 flex flex-col items-center justify-center">
            <div className="rounded-full w-5 h-5 bg-slate-100"></div>
          </div>
        )}
      </button>
      <p className="text-center pt-1 text-slate-300">Record</p>
    </div>
  );
};
