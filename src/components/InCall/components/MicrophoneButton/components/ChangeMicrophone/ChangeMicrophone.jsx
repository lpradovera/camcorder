import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMicrophone,
  getMicrophone,
} from "../../../../../../features/deviceSlice";

export const ChangeMicrophone = () => {
  const dispatch = useDispatch();
  const microphones = useSelector((state) => state?.device?.microphones);
  const handleChangeMicrophone = (e) => {
    dispatch(getMicrophone());
    dispatch(updateMicrophone(e.target.value));
  };

  useEffect(() => {
    dispatch(getMicrophone());
  }, [dispatch]);

  return (
    <select
      onClick={() => dispatch(getMicrophone())}
      onChange={(e) => handleChangeMicrophone(e)}
      className={`flex w-8 h-14 outline-none chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
    >
      {microphones &&
        microphones.map((mic) => {
          return (
            <option key={mic?.deviceId} value={mic?.deviceId}>
              {mic?.label}
            </option>
          );
        })}
    </select>
  );
};
