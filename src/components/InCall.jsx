import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import * as SignalWire from "@signalwire/js";

export default function InCall({ roomDetails }) {
  useEffect(() => {
    console.log('effect works')
    let roomSession;

    (async () => {
      try {
        const reply = await axios.post("/api/get_token", {
          user_name: roomDetails.name,
          room_name: roomDetails.room,
        });
        console.log(reply.data);
        const token = reply.data.token;

        try {
          console.log("Setting up RTC session");

          roomSession = new SignalWire.Video.RoomSession({
            token: token,
            rootElement: document.querySelector("#video-root")
          });

          roomSession.on("room.joined", async (e) => {
            console.log("You have joined the room.");
          });

          roomSession.on("memberList.updated", (e) => {
            console.log("member list updated.");
          });

          roomSession.on("member.joined", async (e) => {
            console.log(e.member.name + " has joined the room.");
          });

          roomSession.on("member.left", async (e) => {
            console.log("member.left");
            if (e.member.id === roomSession.memberId) {
              console.log("It is you who has left the room");
            } else {
              console.log(e.member.name + " has left the room.");
            }
          });

          console.log("Join");

          await roomSession.join();

          console.log("Joined");
        } catch (error) {
          console.error("Something went wrong", error);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <>
      <div
        id="video-root"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          aspectRatio: "16/9",
          margin: "auto"
        }}
      ></div>
    </>
  );
}