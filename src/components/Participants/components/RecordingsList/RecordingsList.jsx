import React, { useEffect } from "react";
import { ButtonRefresh } from "../ButtonComponents/ButtonRefresh/ButtonRefresh";
import { RecordingItem } from "../RecordingItem/RecordingItem";
import { useDispatch } from "react-redux";
import { getRecordings } from "../../../../features/recordingSlice";

export const RecordingsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecordings());
  }, [dispatch]);

  return (
    <div className="relative">
      <ButtonRefresh />
      <div className="pt-10 shadow-lg mb-2 text-slate-300 rounded-lg py-4 px-3 bg-slate-60">
        <h4 className="pb-5 font-medium">Record:</h4>
        <RecordingItem />
      </div>
    </div>
  );
};
