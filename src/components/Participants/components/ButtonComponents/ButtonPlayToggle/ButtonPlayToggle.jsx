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
    <div className='flex justify-center h-10'>
      <button
        onClick={() => handlePlay(id)}
      >
        <Play />
      </button>
      <button
        onClick={() => handlePause()}
      >
        <Pause />
      </button>
      <button
        onClick={() => handleStop()}
      >
        <Stop />
      </button>
    </div>
  );
};
