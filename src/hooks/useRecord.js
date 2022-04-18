import { useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
/**
 *
 * 
 * @returns use startRecord to start recording video
 * @returns use stopRecord to stop recording video
 * @returns use recordingReady record object
 */
export const useRecord = () => {
  const [recordingObj, setRecordingObj] = useState();
  const [recordingReady, setRecordingReady] = useState();
  const [record, setRecord] = useState();

  const room = useSelector(state => state?.room.room);

  const startRecording = async () => {
    if (!recordingObj) {
      if (Object.keys(room).length !== 0) {
        const rec = await room.startRecording();
        setRecordingObj(rec);
      }

      console.log(
        "Your recording is being processed and will be downloaded shortly."
      );
    } else {
      const recId = recordingObj.id;
      await recordingObj.stop();
      setRecordingObj(undefined);
      console.log("Stop recording");
      setRecord(room.getRecordings());
      await retry(
        async () => {
          const res = await axios.get(
            `http://localhost:8080/get_recording/${recId}`
          );
          if (res.data && res.data.uri) {
            console.log(res.data, "RECORDING");
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
    record,
  };
};
