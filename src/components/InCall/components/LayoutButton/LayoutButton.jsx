import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLayout, setLayout } from "../../../../features/layoutSlice";
import { isEmpty } from "../../../../helpers/helpers";
import { ButtonName } from "../ButtonName/ButtonName";
import { Wrapper } from './components/Wrapper/Wrapper';
import { updateMicrophone } from '../../../../features/deviceSlice';
import { LayoutItems } from './components/LayoutItems/LayoutItems';

export const LayoutButton = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room.room);
  const handleChangeLayout = (e) => {
    if (isEmpty(room)) return;
    dispatch(getLayout());
    dispatch(setLayout(e.target.value));
    dispatch(updateMicrophone())
  };

  return (
    <Wrapper>
      <select
        className="flex form-select outline-none layout-bg appearance-none text-transparent dark:bg-slate-500 hover:dark:bg-slate-400 rounded justify-center pt-4 w-14 h-14"
        onChange={(e) => {
          handleChangeLayout(e);
        }}
      >
        <LayoutItems />
      </select>
      <ButtonName name={"Layout"} />
    </Wrapper>
  );
};
