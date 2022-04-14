import React, { useState } from "react";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Form } from "./components/Form/Form";
import { FormHeader } from "./components/FormHeader/FormHeader";

export const JoinCallForm = ({ onJoin = () => {} }) => {
  let [name, setName] = useState("");
  let [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && room !== "") {
      onJoin({ name, room });
    } else {
      alert("Please Fill all fields");
    }
  };
  return (
    <Wrapper>
      <div className="max-w-md w-full space-y-8 flex flex-col">
        <FormHeader />

        <Form handleSubmit={handleSubmit} setName={setName} setRoom={setRoom} />
      </div>
    </Wrapper>
  );
};
