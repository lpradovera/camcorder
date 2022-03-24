import React from "react";
import { useRecord } from "../../../../hooks/useRecord";
import { useVideoStream } from "../../../../hooks/useVideoStream";
import { useAudioStream } from "../../../../hooks/useAudioStream";
import { VideoRecordingSymbol } from "../../../VideoRecordingSymbol/VideoRecordingSymbol";
import { VideoCameraButton } from "../VideoCameraButton/VideoCameraButton";
import { RecordingButton } from "../RecordingButton/RecordingButton";
import { MicrophoneButton } from "../MicrophoneButton/MicrophoneButton";
import { VolumeButton } from "../VolumeButton/VolumeButton";
import { GetRecordButton } from "../GetRecordButton/GetRecordButton";

export const ControlPanel = ({ room, memberList, thisMemberId }) => {
  const { startRecording, recording, recordingReady } = useRecord(room);
  const { videoStream, videoMuted } = useVideoStream(
    room,
    memberList,
    thisMemberId
  );
  const { audioStream, audioMuted } = useAudioStream(
    room,
    memberList,
    thisMemberId
  );
  return (
    <>
      <div className="flex py-2 justify-center relative transparent">
        <div className="flex w-2/4 opacity-50 hover:opacity-100 justify-around h-28 rounded-lg bg-slate-600">
          <VideoCameraButton
            videoStream={videoStream}
            videoMuted={videoMuted}
          />
          <RecordingButton
            startRecording={startRecording}
            recording={recording}
          />
          <MicrophoneButton audioStream={audioStream} audioMuted={audioMuted} />
          <VolumeButton videoStream={videoStream} videoMuted={videoMuted} />
          <GetRecordButton recordingReady={recordingReady} />
        </div>

        {recording ? (
          <VideoRecordingSymbol position="absolute" bottom="2" right="6" />
        ) : null}
      </div>
    </>
  );
};
