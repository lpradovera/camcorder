import React, { useState } from "react";
import { Play } from "../../../../Icons/Play/Play";
import { Pause } from "../../../../Icons/Pause/Pause";
import { Stop } from "../../../../Icons/Stop/Stop";
import axios from "axios";

export const ButtonPlayToggle = ({ room, id }) => {
  const [uri, setUri] = useState("");
  const [pause, setPause] = useState(false);
  const [currentPlayback, setCurrentPlayback] = useState();

  const getUrl = async (id) => {
    await retry(
      async () => {
        try {
          const res = await axios.get(
            `http://localhost:8080/get_recording/${id}`
          );
          if (res.status === 200) {
            await setUri(res.data.uri);
            return true;
          }
          return false;
        } catch (error) {
          console.log(error);
        }
      },
      1000,
      5
    );
  };
  async function retry(fn, timeout_ms, retries) {
    if (retries > 0 && !(await fn())) {
      await new Promise((resolve) => setTimeout(resolve, timeout_ms));
      retry(fn, timeout_ms, retries - 1);
    }
  }

  const handlePlay = async (id) => {
    if (pause) {
      await currentPlayback.resume();
      setPause(false);
    } else {
      await getUrl(id);
      if (uri) {
        await setCurrentPlayback(await room.play({ url: uri }));
      }
    }
  };

  const handlePause = async () => {
    await currentPlayback.pause();
    setPause(true);
  };

  const handleStop = async () => {
    await currentPlayback.stop();
  };

  return (
    <>
      <button onClick={() => handlePlay(id)} className="absolute right-12">
        <Play />
      </button>
      <button onClick={() => handlePause()} className="absolute right-6">
        <Pause />
      </button>
      <button onClick={() => handleStop()} className="absolute right-0">
        <Stop />
      </button>
    </>
  );
};
