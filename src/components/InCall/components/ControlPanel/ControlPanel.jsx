import React from "react";
import { useRecord } from "../../../../hooks/useRecord";
import { VideoCameraButton } from "../VideoCameraButton/VideoCameraButton";
import { RecordingButton } from "../RecordingButton/RecordingButton";
import { MicrophoneButton } from "../MicrophoneButton/MicrophoneButton";
import { SpeakerButton } from "../SpeakerButton/SpeakerButton";
import { GetRecordButton } from "../GetRecordButton/GetRecordButton";
import { PhoneMissedCallButton } from "../PhoneMissedCallButton/PhoneMissedCallButton";
import { Invite } from "../../../Invite/Invite";
import { useLocation } from "react-router-dom";
import { LayoutButton } from "../LayoutButton/LayoutButton";
import { ScreenShareButton } from "../ScreenShareButton/ScreenShareButton";
import { InteriorWrapper } from "./component/InteriorWrapper";
import { ExternalWrapper } from "./component/ExternalWrapper";

export default function ControlPanel ({ roomDetails }) {
  const { startRecording, recordingReady } = useRecord();
  const location = useLocation();
  const { mod } = location?.state;


  return (
    <ExternalWrapper>
      <InteriorWrapper >
        <VideoCameraButton />
        <MicrophoneButton />
        <SpeakerButton />
        {mod ? <RecordingButton startRecording={startRecording}/> : null}
        {mod ? <GetRecordButton recordingReady={recordingReady} /> : null}
        <Invite mod={roomDetails.mod} room={roomDetails.room} />
        {mod ? <LayoutButton /> : null}
        <ScreenShareButton />
        <PhoneMissedCallButton />
      </InteriorWrapper>
    </ExternalWrapper>
  );
};
