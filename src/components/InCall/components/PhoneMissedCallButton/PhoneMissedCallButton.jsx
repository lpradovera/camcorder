import React from "react";
import { PhoneMissedCall } from "../../../Icons/PhoneMissedCall/PhoneMissedCall";
import { useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import { roomLeave } from "../../../../features/roomSlice";

export const PhoneMissedCallButton = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleRoomLeave = () => {
    dispatch(roomLeave());

    setTimeout(() => {
      navigate("/", {
        state: { },
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-center px-2 pb-4">
      <button
        className="flex dark:bg-red-600 hover:dark:bg-red-500 rounded justify-center pt-4 w-14 h-14"
        onClick={async () => handleRoomLeave()}
      >
        <PhoneMissedCall />
      </button>
      <p className="text-center pt-1 text-slate-300">Leave</p>
    </div>
  );
};
