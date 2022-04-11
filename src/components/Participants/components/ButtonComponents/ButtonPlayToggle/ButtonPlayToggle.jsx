import React, { useState } from "react";
import { Play } from "../../../../Icons/Play/Play";
import { Pause } from "../../../../Icons/Pause/Pause";
import { Stop } from "../../../../Icons/Stop/Stop";
import { useDispatch } from "react-redux";
import {
  play,
  resume,
  pause,
  stop,
} from "../../../../../features/recordingSlice";


export const ButtonPlayToggle = ({ id }) => {
  const [waiting, setWaiting] = useState(false);
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

  return (
    <>
      <button
        onClick={() => handlePlay(id)}
        className="absolute right-12 bottom-0"
      >
        <Play />
      </button>
      <button
        onClick={() => handlePause()}
        className="absolute right-6 bottom-0"
      >
        <Pause />
      </button>
      <button
        onClick={() => handleStop()}
        className="absolute right-0 bottom-0"
      >
        <Stop />
      </button>
    </>
  );
};
