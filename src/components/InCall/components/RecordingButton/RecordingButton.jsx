import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { RecCircle } from "./components/RecCircle/RecCircle";
import { ButtonName } from "../ButtonName/ButtonName";

export const RecordingButton = ({ startRecording }) => {
  const record = useSelector((state) => state?.recording?.record);

  return (
    <Wrapper>
      <button
        className={`flex ${
          record ? "bg-slate-100" : "bg-slate-500 hover:bg-slate-400"
        } rounded justify-center pt-3 w-14 h-14`}
        onClick={() => {
          startRecording();
        }}
      >
        <RecCircle record={record} />
      </button>
      <ButtonName name={"Record"} />
    </Wrapper>
  );
};
