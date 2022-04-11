import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { roomLeave } from "../../../../../../features/roomSlice";
import { isEmpty } from "../../../../../../helpers/helpers";

export const Button = ({ children }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room.room);

  const handleRoomLeave = () => {
    if (isEmpty(room)) return;
    dispatch(roomLeave());

    setTimeout(() => {
      navigate("/", {
        state: {},
      });
    }, 1500);
  };

  return (
    <button
      className="flex dark:bg-red-600 hover:dark:bg-red-500 rounded justify-center pt-4 w-14 h-14"
      onClick={async () => handleRoomLeave()}
    >
      {children}
    </button>
  );
};
