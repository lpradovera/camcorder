import { useState, useCallback } from "react";

export const useOnRoomInit = () => {
  let [room, setRoom] = useState({}),
    [layouts, setLayouts] = useState([]);

  let onRoomInit = useCallback((room, layouts) => {
    setRoom(room);
    setLayouts(layouts);
  }, []);
  return {
    room,
    layouts,
    onRoomInit,
  }
};

