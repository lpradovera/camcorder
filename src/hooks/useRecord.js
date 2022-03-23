import { useState } from "react";

/**
 * 
 * @param {*} room use the room parameter to manage the video session
 * @returns use startRecord to start recording video
 * @returns use stopRecord to stop recording video
 */
export const useRecord = (room) => {
  const [recording, setRecording] = useState(false),
    [recordingObj, setRecordingObj] = useState();

  const startRecording = async () => {
    if (!recordingObj) {
      const rec = await room.startRecording();
      setRecordingObj(rec);
      setRecording(true);
      console.log(
        "Your recording is being processed and will be downloaded shortly."
      );
    } else {
      const recId = recordingObj.id;
      await recordingObj.stop();
      setRecording(false);
      setRecordingObj(undefined);
    }
  };

  const stopRecording = async () => {
    if (recordingObj) {
      await recordingObj.stop();
      setRecordingObj(undefined);
      setRecording(false);
      console.log("Stop recording");
    }
  };

  return {
    startRecording,
    stopRecording,
    recording,
  };
};
