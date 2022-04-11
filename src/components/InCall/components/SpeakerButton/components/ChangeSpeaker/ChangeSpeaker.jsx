import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSpeakers,
  getSpeakers,
} from "../../../../../../features/deviceSlice";

export const ChangeSpeaker = () => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state?.device?.speakers);

  const handleChangeSpeakers = async (e) => {
    dispatch(updateSpeakers(e.target.value));
  };

  useEffect(() => {
    dispatch(getSpeakers());
  }, [dispatch]);

  return (
    <select
      onClick={() => dispatch(getSpeakers())}
      onChange={(e) => handleChangeSpeakers(e)}
      className={`flex w-8 h-14 outline-none chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
    >
      {speakers &&
        speakers.map((speaker) => {
          return (
            <option key={speaker.deviceId} value={speaker.deviceId}>
              {speaker.label}
            </option>
          );
        })}
    </select>
  );
};
