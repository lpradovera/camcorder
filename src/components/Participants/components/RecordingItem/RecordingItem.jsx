import React from "react";
import { getDate } from "../../../../helpers/helpers";
import { ButtonPlayToggle } from "../ButtonComponents/ButtonPlayToggle/ButtonPlayToggle";

export const RecordingItem = ({ rec, room }) => {

  return (
    <>
      {rec &&
        rec.recordings.map((r, i) => {
          return (
            <div key={r.id} className="flex flex-col pb-3">
              <div className="flex">
                <p className="pr-1">{i + 1}. </p>
                <p>
                  Started: {getDate(r.startedAt)} Ended: {getDate(r.endedAt)}
                </p>
              </div>

              <div className="pl-5 flex relative">
                <p>Duration: {r.duration} seconds.</p>
                <ButtonPlayToggle
                  room={room}
                  id={r.id}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};
