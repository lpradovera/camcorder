import React, {useState} from "react";
import { getDate } from "../../../../helpers/helpers";
import { ButtonPlay } from "../ButtonComponents/ButtonPlay/ButtonPlay";
import { ButtonStop } from "../ButtonComponents/ButtonStop/ButtonStop";

export const RecordingItem = ({ rec, room }) => {

  const [currentPlayback, setCurrentPlayback] = useState();

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
                <ButtonPlay setCurrentPlayback={setCurrentPlayback} room={room} id={r.id} duration={r.duration} />
                <ButtonStop room={room} currentPlayback={currentPlayback}/>
              </div>
            </div>
          );
        })}
    </>
  );
};
