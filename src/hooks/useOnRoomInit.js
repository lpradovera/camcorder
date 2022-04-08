import { useState, useCallback } from "react";

export const useOnRoomInit = () => {
  let [room, setRoom] = useState({});

  let onRoomInit = useCallback((room) => {
    setRoom(room);
  }, []);

  return {
    room,
    onRoomInit,
  }
};

