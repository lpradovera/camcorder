import React, { useEffect, useState } from "react";
import { getDate } from "../../../../helpers/helpers";
import { ButtonPlayToggle } from "../ButtonComponents/ButtonPlayToggle/ButtonPlayToggle";
import { useDispatch, useSelector } from "react-redux";
import { getRecordings, stop } from "../../../../features/recordingSlice";
import { ButtonArrow } from "../ButtonComponents/ButtonArrow/ButtonArrow";
import { RecordingWrapper } from "./components/RecordingWrapper/RecordingWrapper";
import { ButtonWrapper } from "./components/ButtonWrapper/ButtonWrapper";

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
            <RecordingWrapper key={r.id}>
              <div className="flex">
                <p className="pr-1">{i + 1}. </p>
                <div className="flex flex-col">
                  <p>Started: {getDate(r.startedAt)}</p>
                  <p>Duration: {r.duration} s.</p>
                </div>
              </div>
              <div className="flex flex-col pt-2">
                <ButtonWrapper>
                  <ButtonArrow setIds={setIds} i={i} stop={stop} ids={ids} />
                  {ids === i + 1 ? <ButtonPlayToggle id={r.id} /> : null}
                </ButtonWrapper>
              </div>
            </RecordingWrapper>
          );
        })}
    </>
  );
};
