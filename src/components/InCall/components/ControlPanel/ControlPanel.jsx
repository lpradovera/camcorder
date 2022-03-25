import React from "react";
import { useRecord } from "../../../../hooks/useRecord";
import { VideoRecordingSymbol } from "../../../VideoRecordingSymbol/VideoRecordingSymbol";
import { VideoCameraButton } from "../VideoCameraButton/VideoCameraButton";
import { RecordingButton } from "../RecordingButton/RecordingButton";
import { MicrophoneButton } from "../MicrophoneButton/MicrophoneButton";
import { VolumeButton } from "../VolumeButton/VolumeButton";
import { GetRecordButton } from "../GetRecordButton/GetRecordButton";

export const ControlPanel = ({
  room,
  videoMuted,
  audioMuted,
  setVideoMuted,
  setAudioMuted,
}) => {
  const { startRecording, recording, recordingReady } = useRecord(room);
  
  return (
    <>
      <div className="flex py-2 justify-center relative transparent">
        <div className="flex w-2/4 opacity-50 hover:opacity-100 justify-around h-28 rounded-lg bg-slate-600">
          <VideoCameraButton
            room={room}
            videoMuted={videoMuted}
            setVideoMuted={setVideoMuted}
          />
          <RecordingButton
            startRecording={startRecording}
            recording={recording}
          />
          <MicrophoneButton 
            room={room}
            audioMuted={audioMuted}
            setAudioMuted={setAudioMuted}
          />
          {/* <VolumeButton videoStream={videoStream} videoMuted={videoMuted} /> */}
          <GetRecordButton recordingReady={recordingReady} />
        </div>

        {recording ? (
          <VideoRecordingSymbol position="absolute" bottom="2" right="6" />
        ) : null}
      </div>
    </>
  );
};
