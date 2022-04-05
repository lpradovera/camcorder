import React, { useEffect, useState } from "react";
import { ButtonRefresh } from "../ButtonComponents/ButtonRefresh/ButtonRefresh";
import { RecordingItem } from "../RecordingItem/RecordingItem";

export const RecordingsList = ({ room }) => {
  const [rec, setRec] = useState();

  const getRec = async () => {
    await retry(
      async () => {
        const res = await room.getRecordings();
        if (res) {
          console.log(res, "RECORDING");
          setRec(res);
          return true;
        }
        return false;
      },
      1000,
      5
    );
    async function retry(fn, timeout_ms, retries) {
      if (retries > 0 && !(await fn())) {
        await new Promise((resolve) => setTimeout(resolve, timeout_ms));
        retry(fn, timeout_ms, retries - 1);
      }
    }
  };

  useEffect(() => {
    getRec();
  }, []);

  return (
    <div className={`relative`}>
      <ButtonRefresh getRec={getRec} />

      <div className="pt-10 shadow-lg mb-2 dark:text-slate-300 rounded-lg py-4 px-3 dark:bg-slate-60">
        <h4 className="pb-5 font-medium">Record:</h4>
        <RecordingItem rec={rec} room={room} />
      </div>
    </div>
  );
};
