import React, { useState } from "react";

export default function JoinCallForm({
  roomName,
  onJoin = () => {},
  mod = false
}) {
  let [name, setName] = useState("");
  let [joinAsGuest, setJoinAsGuest] = useState(false);
  return (
    <>
      JoinForm
    </>
  );
}
