import React from "react";
import { ScreenShare } from "../../../Icons/ScreenShare/ScreenShare";
import { useDispatch, useSelector } from "react-redux";
import { shareScreen } from "../../../../features/layoutSlice";
import { isEmpty } from "../../../../helpers/helpers";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { ButtonName } from "../ButtonName/ButtonName";

export const ScreenShareButton = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room.room);

  const screenShareToggle = () => {
    if (isEmpty(room)) return;
    dispatch(shareScreen());
  };

  return (
    <Wrapper>
      <button
        onClick={() => screenShareToggle()}
        className="flex bg-slate-500 hover:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
      >
        <ScreenShare />
      </button>
      <ButtonName name={"Screen"} />
    </Wrapper>
  );
};
