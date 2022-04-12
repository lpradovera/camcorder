import React, { useState, useEffect } from "react";
import { Play } from "../../../../Icons/Play/Play";
import { Pause } from "../../../../Icons/Pause/Pause";
import { Stop } from "../../../../Icons/Stop/Stop";
import { Download } from "../../../../Icons/Download/Download";
import { useDispatch, useSelector } from "react-redux";
import {
  play,
  resume,
  pause,
  stop,
  saveThisRecord,
} from "../../../../../features/recordingSlice";

export const ButtonPlayToggle = ({ id }) => {
  const [waiting, setWaiting] = useState(false);
  const uri = useSelector((state) => state.recording.uri);
  const dispatch = useDispatch();

  const handlePlay = (id) => {
    if (waiting) {
      dispatch(resume());
      setWaiting(false);
    } else {
      dispatch(play(id));
      setWaiting(true);
    }
  };

  const handlePause = async () => {
    await dispatch(pause());
    setWaiting(true);
  };

  const handleStop = async () => {
    await dispatch(stop());
    setWaiting(false);
  };

  useEffect(() => {
    dispatch(saveThisRecord(id));
  }, [dispatch]);

  return (
    <>
      <button
        onClick={() => handlePlay(id)}
        className="absolute right-20 bottom-0"
      >
        <Play />
      </button>
      <button
        onClick={() => handlePause()}
        className="absolute right-14 bottom-0"
      >
        <Pause />
      </button>
      <button
        onClick={() => handleStop()}
        className="absolute right-8 bottom-0"
      >
        <Stop />
      </button>
      <button className="absolute right-0 bottom-0">
        <Download uri={uri} />
      </button>
    </>
  );
};
