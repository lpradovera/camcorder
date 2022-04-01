import React, { useEffect } from "react";
import { PhoneMissedCall } from "../../../Icons/PhoneMissedCall/PhoneMissedCall";
import { useNavigate } from "react-router-dom";

export const PhoneMissedCallButton = ({ room }) => {
  let navigate = useNavigate();
  useEffect(() => {
    console.log("Test, volume button does not work");
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <button
        className="flex dark:bg-red-500 hover:dark:bg-red-600 rounded justify-center pt-4 w-14 h-14"
        onClick={() => {
          room.leave();
          setTimeout(() => {
            navigate("/dashboard", {
              state: { },
            });
          }, 1500);
        }}
      >
        <PhoneMissedCall />
      </button>
      <p className="text-center pt-1 text-slate-300">Leave</p>
    </div>
  );
};
