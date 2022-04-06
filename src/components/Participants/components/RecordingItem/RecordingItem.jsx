import React, { useEffect, useState } from "react";
import { getDate } from "../../../../helpers/helpers";
import { ButtonPlayToggle } from "../ButtonComponents/ButtonPlayToggle/ButtonPlayToggle";
import { useDispatch, useSelector } from "react-redux";
import { getRecordings, stop } from "../../../../features/recordingSlice";

export const RecordingItem = ({ room }) => {
  const dispatch = useDispatch();
  let recording = useSelector((state) => state?.recording?.recordings);
  let [ids, setIds] = useState();

  useEffect(() => {
    dispatch(getRecordings(room));
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
                  <Arrow setIds={setIds} i={i} stop={stop}/>
                {ids === i + 1 ? (
                  <ButtonPlayToggle room={room} id={r.id} />
                ) : null}
              </div>
            </div>
          );
        })}
    </>
  );
};

export const Arrow = ({setIds, i, stop}) => {
  const dispatch = useDispatch();
  return (
    <svg
      onClick={() => {
        dispatch(stop())
        setIds(i + 1)
      }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="#fff"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
