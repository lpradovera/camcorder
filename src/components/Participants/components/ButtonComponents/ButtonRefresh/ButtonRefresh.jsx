import React, {useState} from "react";
import { Refresh } from '../../../../Icons/Refresh/Refresh';
import { useDispatch } from "react-redux";
import { getRecordings } from "../../../../../features/recordingSlice";

export const ButtonRefresh = ({room}) => {
  const [spin, setSpin] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setSpin(true);
    dispatch(getRecordings(room));
    setTimeout(() => setSpin(false), 1000);
  }

  return (
    <button
      className="px-2 py-2 absolute right-0 top-[-30px] dark:bg-slate-800 dark:hover:bg-slate-700 rounded"
      onClick={() => handleClick()}
    >
      <Refresh spin={spin} />
    </button>
    
  );
};
