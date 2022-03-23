import React, { useState } from "react";

export const InviteForm = ({ roomName, onJoin = () => {}, mod = false }) => {
  let [name, setName] = useState("");
  let [joinAsGuest, setJoinAsGuest] = useState(false);

  return <>JoinForm</>;
};
