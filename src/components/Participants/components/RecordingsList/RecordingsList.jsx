import React, { useEffect, useState } from "react";
import { ButtonRefresh } from "../ButtonComponents/ButtonRefresh/ButtonRefresh";
import { getDate } from "../../../../helpers/helpers";

export const RecordingsList = ({ room, offset }) => {
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
    <div className={`relative ${offset ? "hidden" : "block"}`}>
      <ButtonRefresh getRec={getRec} />

      <div className="pt-10 shadow-lg mb-2 dark:text-slate-300 rounded-lg py-4 px-3 dark:bg-slate-60">
        <h4 className="pb-5 font-medium">Record:</h4>
        {rec &&
          rec.recordings.map((r, i) => {
            return (
              <div key={r.id} className="flex flex-col pb-3">
                <div className='flex'>
                  <p className="pr-1">{i + 1}. </p>
                  <p>
                    Started: {getDate(r.startedAt)} Ended: {getDate(r.endedAt)}
                  </p>
                </div>

                <div className="pl-5">
                  <p>Duration: {r.duration} seconds.</p>
                  
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
