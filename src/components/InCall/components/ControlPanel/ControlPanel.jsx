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
import { useSelector } from "react-redux";

export const ControlPanel = ({
  roomDetails,
}) => {
  const { startRecording, recordingReady } = useRecord();
  const location = useLocation();
  const record = useSelector((state) => state?.recording?.record);

  return (
    <>
      <div className="flex py-2 justify-center relative transparent">
        <div
          style={{ maxWidth: "900px" }}
          className={`flex w-11/12 ${
            record ? "border-2 border-red-600" : "border-2 border-transparent"
          } flex-wrap pt-2 pl-6 pr-6 opacity-100 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto]  rounded-lg bg-slate-600`}
        >
          <VideoCameraButton />

          <MicrophoneButton />
          <SpeakerButton />
          {location.state.mod ? (
            <RecordingButton startRecording={startRecording} />
          ) : null}

          {location.state.mod ? (
            <GetRecordButton recordingReady={recordingReady} />
          ) : null}

          <Invite mod={roomDetails.mod} room={roomDetails.room} />
          {location.state.mod ? <LayoutButton /> : null}
          <ScreenShareButton />
          <PhoneMissedCallButton />
        </div>
      </div>
    </>
  );
};
