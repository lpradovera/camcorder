import React from "react";
import { useRecord } from "../../../../hooks/useRecord";
import { VideoRecordingSymbol } from "../../../VideoRecordingSymbol/VideoRecordingSymbol";
import { VideoCameraButton } from "../VideoCameraButton/VideoCameraButton";
import { RecordingButton } from "../RecordingButton/RecordingButton";
import { MicrophoneButton } from "../MicrophoneButton/MicrophoneButton";
import { VolumeButton } from "../VolumeButton/VolumeButton";
import { GetRecordButton } from "../GetRecordButton/GetRecordButton";
import { PhoneMissedCallButton } from "../PhoneMissedCallButton/PhoneMissedCallButton";
import { Invite } from "../../../Invite/Invite";
import { useLocation } from "react-router-dom";

export const ControlPanel = ({
  room,
  recording,
  videoMuted,
  volumeMuted,
  roomDetails,
  audioMuted,
  setVideoMuted,
  setAudioMuted,
  setVolumeMuted,
}) => {
  const { startRecording, recordingReady } = useRecord(room);
  const location = useLocation();

  return (
    <>
      <div className="flex py-2 justify-center relative transparent">
        <div
          style={{ maxWidth: "620px" }}
          className={`flex w-4/5 ${recording ? 'border-2 border-red-500' : 'border-none'} xs:border-none flex-wrap xs:flex-nowrap pt-4 opacity-50 hover:opacity-100 transition-[opacity] duratrion-1000 justify-around h-[auto] sm:h-28 rounded-lg bg-slate-600`}
        >
          <VideoCameraButton
            room={room}
            videoMuted={videoMuted}
            setVideoMuted={setVideoMuted}
          />
          {location.state.mod ? (
            <RecordingButton
              startRecording={startRecording}
              recording={recording}
            />
          ) : null}

          <MicrophoneButton
            room={room}
            audioMuted={audioMuted}
            setAudioMuted={setAudioMuted}
          />
          <VolumeButton
            room={room}
            volumeMuted={volumeMuted}
            setVolumeMuted={setVolumeMuted}
          />
          {location.state.mod ? (
            <GetRecordButton recordingReady={recordingReady} />
          ) : null}

          <Invite mod={roomDetails.mod} room={roomDetails.room} />

          <PhoneMissedCallButton room={room} />
          
        </div>

        {recording ? (
          <VideoRecordingSymbol position="absolute" bottom="2" right="0" />
        ) : null}
      </div>
    </>
  );
};
