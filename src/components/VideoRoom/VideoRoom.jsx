import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as SignalWire from "@signalwire/js";

export const VideoRoom = ({
  onRoomInit = () => {},
  onRoomUpdate = () => {},
  roomDetails: roomDetails = { room: "test", name: "tester" },
  onMemberListUpdate = () => {},
}) => {
  let [setupDone, setSetupDone] = useState(false);
  let thisMemberId = useRef(null);
  let memberList = useRef([]);

  useEffect(() => {
    if (setupDone) return;
    setup_room();
    async function setup_room() {
      setSetupDone(true);
      let room;
      try {
        const reply = await axios.post("/api/get_token", {
          user_name: roomDetails.name,
          room_name: roomDetails.room,
          mod: roomDetails.mod,
        });
        console.log("reply.data", reply.data);
        const token = reply.data.token;

        try {
          try {
            room = await SignalWire.Video.createRoomObject({
              token,
              rootElementId: "video-root",
              video: true,
              audio: true,
            });
          } catch (e) {
            console.log(e);
          }
          room.on("room.joined", async (e) => {
            thisMemberId.current = e.member_id;
            memberList.current = e.room.members;
            let thisMember = memberList.current.find(
              (m) => m.id === e.member_id
            );
            onRoomUpdate({ thisMemberId: e.member_id, member: thisMember });
            onMemberListUpdate(e.room.members);
            console.log(e.room.members);
            console.log("You have joined the room.");
          });
          room.on("room.updated", async (e) => {
            console.log("Room has been updated");
          });
          room.on("member.joined", async (e) => {
            console.log(e.member.name + " has joined the room.");
            memberList.current.push(e.member);
            console.log(memberList.current);
            onMemberListUpdate(memberList.current);
          });
          room.on("member.updated", async (e) => {
            let updatedMember = memberList.current.find(
              (x) => x.id === e.member.id
            );

            if (updatedMember === undefined) return;
            updatedMember = { ...updatedMember, ...e.member };

            let newMemberList = memberList.current.filter(
              (x) => x.id !== e.member.id
            );
            newMemberList.push(updatedMember);
            memberList.current = newMemberList;

            onMemberListUpdate([...memberList.current]);
          });

          room.on("member.left", async (e) => {
            let memberThatLeft = memberList.current.find(
              (m) => m.id === e.member.id
            );
            let remainingMembers = memberList.current.filter(
              (m) => m.id !== e.member.id
            );

            if (memberThatLeft === undefined) return;
            console.log(memberThatLeft?.name + " has left the room.")
            console.log(memberThatLeft);
            memberList.current = remainingMembers;
            onMemberListUpdate(memberList.current);
          });

          await room.join();
          onRoomInit(room);
          console.log("You joined");
        } catch (error) {
          console.error("Something went wrong", error);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [roomDetails, onRoomUpdate, onRoomInit, onMemberListUpdate, setupDone]);

 
  return (
    <>
      <div
        id="video-root"
        style={{
          maxWidth: "600px",
          maxHeight: "600px",
          aspectRatio: "16/9",
          margin: "auto",
        }}
      ></div>
    </>
  );
};
