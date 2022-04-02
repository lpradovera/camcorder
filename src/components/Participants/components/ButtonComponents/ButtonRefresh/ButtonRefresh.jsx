import React, {useState} from "react";
import { Refresh } from '../../../../Icons/Refresh/Refresh';

export const ButtonRefresh = ({getRec}) => {
  const [spin, setSpin] = useState(false);

  const handleClick = () => {
    setSpin(true);
    getRec();
    setTimeout(() => setSpin(false), 1000);
  }

  return (
    <button
      className="px-2 py-2 absolute right-0 top-[-50px] dark:bg-slate-800 dark:hover:bg-slate-700 rounded"
      onClick={() => handleClick()}
    >
      <Refresh spin={spin} />
    </button>
    
  );
};
