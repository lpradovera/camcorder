import React, { useEffect, useState } from "react";
import { getDate } from "../../../../helpers/helpers";
import { ButtonPlayToggle } from "../ButtonComponents/ButtonPlayToggle/ButtonPlayToggle";
import { useDispatch, useSelector } from "react-redux";
import { getRecordings, stop } from "../../../../features/recordingSlice";
import { ButtonArrow } from "../ButtonComponents/ButtonArrow/ButtonArrow";
// import { setVideoId } from '../../../../features/recordingSlice';


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
            <div key={r.id} className="flex justify-between pb-7 relative">
              <div className="flex">
                <p className="pr-1">{i + 1}. </p>
                <div className="flex flex-col">
                  <p>Started: {getDate(r.startedAt)}</p>
                <p>Duration: {r.duration} s.</p>
                </div>
                
              </div>

              <div className="flex pt-6 p">
                  <ButtonArrow setIds={setIds} i={i} stop={stop} ids={ids}/>
                {ids === i + 1 ? (
                  <ButtonPlayToggle id={r.id} />
                ) : null}
                {/* {ids === i + 1 ? (
                  <button onClick={() => dispatch(setVideoId(r.id))}>play</button>
                ) : null} */}
                
              </div>
            </div>
          );
        })}
    </>
  );
};

