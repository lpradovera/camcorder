import React from "react";
import { ButtonName } from "../ButtonName/ButtonName";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Button } from "./components/Button/Button";
import { OnRecording } from "./components/OnRecording/OnRecording";

export const GetRecordButton = ({ recordingReady }) => {
  return (
    <Wrapper>
      <Button recordingReady={recordingReady}>
        <OnRecording recordingReady={recordingReady} />
      </Button>
      <ButtonName name={"Save"} />
    </Wrapper>
  );
};
