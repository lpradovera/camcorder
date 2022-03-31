import { useState } from "react";
import axios from 'axios';
/**
 *
 * @param {*} room use the room parameter to manage the video session
 * @returns use startRecord to start recording video
 * @returns use stopRecord to stop recording video
 * @returns use recordingReady record object
 */
export const useRecord = (room) => {
  const [recordingObj, setRecordingObj] = useState();
  const [recordingReady, setRecordingReady] = useState();

  const startRecording = async () => {
    if (!recordingObj) {
      const rec = await room.startRecording();
      setRecordingObj(rec);

      console.log(
        "Your recording is being processed and will be downloaded shortly."
      );
    } else {
      const recId = recordingObj.id;
      await recordingObj.stop();
      setRecordingObj(undefined);
      console.log('Stop recording');
      await retry(
        async () => {
          const res = await axios.get(`http://localhost:8080/get_recording/${recId}`);
          if (res.data && res.data.uri) {
            console.log(res.data, 'RECORDING')
            setRecordingReady(res.data);
            return true;
          }
          return false;
        },
        1000,
        5
      );
    }
  };

  async function retry(fn, timeout_ms, retries) {
    if (retries > 0 && !(await fn())) {
      await new Promise((resolve) => setTimeout(resolve, timeout_ms));
      retry(fn, timeout_ms, retries - 1);
    }
  }
  return {
    startRecording,
    recordingReady,
  };
};
