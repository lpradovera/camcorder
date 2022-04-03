import React, { useState } from "react";
import { Play } from "../../../../Icons/Play/Play";
import axios from "axios";
import { useEffect } from "react";

export const ButtonPlay = ({ room, id, duration, setCurrentPlayback }) => {
  const [uri, setUri] = useState();
  const [playback, setPlayback] = useState();

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
  
  const getPlaybacks = async (room) => {
    await retry(
      async () => {
        try {
          const res = await room.getPlaybacks();
          if (res) {
            await setPlayback(res.playbacks[0]);
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
  }



  const handlePlay = async (id) => {
    let forStop;
    await getUrl(id);
    if(playback?.state === 'playing') return 
    if (uri && room) {
      forStop = await room.play({ url: uri });
      setCurrentPlayback(forStop)
      await getPlaybacks(room);

      setTimeout(() => {
        setPlayback();
      }, duration * 1000)
    }
  };
  useEffect( () => {
    
  }, [])

  return (
    <button onClick={() => handlePlay(id)} className="absolute right-6">
      <Play />
    </button>
  );
};
