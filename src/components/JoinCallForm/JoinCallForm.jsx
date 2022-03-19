import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const JoinCallForm = ({ onJoin = () => {} }) => {
  let [name, setName] = useState("");
  let [room, setRoom] = useState("");
  return (
    <>
      <h3>Join a new Room</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          pattern="[^' ']+"
        />
        <input
          type="text"
          placeholder="Room Name"
          onChange={(e) => setRoom(e.target.value)}
          value={room}
          pattern="[^' ']+"
          required
        />
        <button
          type="submit"
          onClick={() => {
            if (name !== "" && room !== "") {
              onJoin({ name, room });
            } else {
              alert("Please Fill all fields");
            }
          }}
        >
          join
        </button>
      </form>
    </>
  );
};
