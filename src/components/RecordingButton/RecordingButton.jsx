import React, { useState } from "react";
import axios from "axios";

export const RecordingButton = ({ room, recordingReady }) => {
  let [recordingObj, setRecordingObj] = useState();
  return (
    <button
      variant="outline-danger"
      type="checkbox"
      checked={recordingObj}
      onClick={async (e) => {
        if (!recordingObj) {
          const rec = await room.startRecording()
          setRecordingObj(rec)
        } else {
          const recId = recordingObj.id
          await recordingObj.stop()
          setRecordingObj(undefined)


          // Get the recording
          // Give the server a bit of time to process the file
          await retry(async () => {
            const res = await axios.get(`http://localhost:8080/get_recording/${recId}`)
            if (res.data && res.data.uri) {
              console.log(res.data, 'RESPonse')
              recordingReady(res.data)
              return true
            }
            return false
          }, 1000, 5)
        }
      }}>
      Rec
    </button>
  );
}

async function retry(fn, timeout_ms, retries) {
  if (retries > 0 && !await fn()) {
    await new Promise(resolve => setTimeout(resolve, timeout_ms));
    retry(fn, timeout_ms, retries - 1);
  }
}