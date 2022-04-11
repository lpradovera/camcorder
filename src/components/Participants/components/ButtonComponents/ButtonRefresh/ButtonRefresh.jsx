import React, {useState} from "react";
import { Refresh } from '../../../../Icons/Refresh/Refresh';
import { useDispatch, useSelector } from "react-redux";
import { getRecordings } from "../../../../../features/recordingSlice";
import { isEmpty } from '../../../../../helpers/helpers';

export const ButtonRefresh = () => {
  const [spin, setSpin] = useState(false);
  const room = useSelector(state => state?.room?.room);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(isEmpty(room)) return
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
