import React, { useEffect, useState } from "react";
import { ButtonRefresh } from "../ButtonComponents/ButtonRefresh/ButtonRefresh";


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
    <>
      <ButtonRefresh getRec={getRec} />

    
      {rec &&
        rec.recordings.map((r) => {
          return <p>{r.id}</p>;
        })}
    </>
  );
};
