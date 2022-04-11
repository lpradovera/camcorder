import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../../../../../helpers/helpers";
import {
  getCameras,
  updateCameras,
} from "../../../../../../features/deviceSlice";

export const ChangeCamera = () => {
  const dispatch = useDispatch();
  const cameras = useSelector((state) => state?.device?.cameras);
  const room = useSelector((state) => state.room.room);
  
  const handleChangeCamera = (e) => {
    if (isEmpty(room)) return;
    dispatch(getCameras());
    dispatch(updateCameras(e.target.value));
  };

  useEffect(() => {
    dispatch(getCameras());
  }, [dispatch]);


  return (
    <select
      onClick={() => dispatch(getCameras())}
      onChange={(e) => handleChangeCamera(e)}
      className={`flex w-8 h-14 outline-none chevron-up form-select appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded-l`}
    >
      {cameras &&
        cameras.map((cam) => {
          return (
            <option
              className="absolute top-[-20px]"
              key={cam.deviceId}
              value={cam.deviceId}
            >
              {cam.label}
            </option>
          );
        })}
    </select>
  );
};
