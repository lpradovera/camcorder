import React from "react";
import { PhoneMissedCall } from "../../../Icons/PhoneMissedCall/PhoneMissedCall";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { roomLeave } from "../../../../features/roomSlice";
// import { isEmpty } from "../../../../helpers/helpers";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Button } from './components/Button/Button';

export const PhoneMissedCallButton = () => {

  // let navigate = useNavigate();
  // const dispatch = useDispatch();
  // const room = useSelector((state) => state.room.room);

  // const handleRoomLeave = () => {
  //   if (isEmpty(room)) return;
  //   dispatch(roomLeave());

  //   setTimeout(() => {
  //     navigate("/", {
  //       state: {},
  //     });
  //   }, 1500);
  // };

  return (
    <Wrapper>
      <Button>
        <PhoneMissedCall />
      </Button>
      <p className="text-center pt-1 text-slate-300">Leave</p>
    </Wrapper>
  );
};
