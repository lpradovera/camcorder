import React, { useEffect, useState } from "react";
import { ButtonRefresh } from "../ButtonComponents/ButtonRefresh/ButtonRefresh";
import { RecordingItem } from "../RecordingItem/RecordingItem";
import { useDispatch, useSelector } from "react-redux";
import { getRecordings } from "../../../../features/recordingSlice";

export const RecordingsList = ({ room }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRecordings(room));
  }, [dispatch]);

  return (
    <div className="relative">
      <ButtonRefresh room={room} />
      <div className="pt-10 shadow-lg mb-2 dark:text-slate-300 rounded-lg py-4 px-3 dark:bg-slate-60">
        <h4 className="pb-5 font-medium">Record:</h4>
        <RecordingItem room={room} />
      </div>
    </div>
  );
};
