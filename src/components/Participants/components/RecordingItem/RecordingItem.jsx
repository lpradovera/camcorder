import React, { useEffect, useState } from "react";
import { getDate } from "../../../../helpers/helpers";
import { ButtonPlayToggle } from "../ButtonComponents/ButtonPlayToggle/ButtonPlayToggle";
import { useDispatch, useSelector } from "react-redux";
import { getRecordings, stop } from "../../../../features/recordingSlice";
import { ButtonArrow } from "../ButtonComponents/ButtonArrow/ButtonArrow";

export const RecordingItem = () => {
  const dispatch = useDispatch();
  const recording = useSelector((state) => state?.recording?.recordings);
  let [ids, setIds] = useState();

  useEffect(() => {
    dispatch(getRecordings());
  }, [dispatch]);

  useEffect(() => {}, [recording]);

  return (
    <>
      {recording &&
        recording?.recordings?.map((r, i) => {
          return (
            <div
              key={r.id}
              className="flex flex-col justify-between text-2xl md:text-base pb-7"
            >
              <div className="flex">
                <p className="pr-1">{i + 1}. </p>
                <div className="flex flex-col">
                  <p>Started: {getDate(r.startedAt)}</p>
                  <p>Duration: {r.duration} s.</p>
                </div>
              </div>
              <div className="flex flex-col pt-2">
                <div className="w-3/5 md:w-4/5 flex justify-between">
                  <ButtonArrow setIds={setIds} i={i} stop={stop} ids={ids} />
                  {ids === i + 1 ? <ButtonPlayToggle id={r.id} /> : null}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
