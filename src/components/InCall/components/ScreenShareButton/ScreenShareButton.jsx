import React from "react";
import { ScreenShare } from "../../../Icons/ScreenShare/ScreenShare";
import { useDispatch, useSelector } from "react-redux";
import { shareScreen } from "../../../../features/layoutSlice";
import {isEmpty} from '../../../../helpers/helpers';

export const ScreenShareButton = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room.room);

  const screenShareToggle = () => {
    if (isEmpty(room)) return
    dispatch(shareScreen());
  };

  return (
    <div className="flex flex-col justify-center px-2 pb-4">
      <button
        onClick={() => screenShareToggle()}
        className="flex dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
      >
        <ScreenShare />
      </button>
      <p className="text-center pt-1 text-slate-300">Screen</p>
    </div>
  );
};
