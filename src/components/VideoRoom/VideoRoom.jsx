import React, { useEffect, useRef, useState } from "react";
import * as SignalWire from "@signalwire/js";
import { getToken } from "../../helpers/helpers";

export const VideoRoom = ({
  onRoomInit = () => {},
  onRoomUpdate = () => {},
  roomDetails: roomDetails = {
    room: "test",
    name: "tester",
  },
  onMemberListUpdate = () => {},
}) => {
  let [setupDone, setSetupDone] = useState(false);
  let thisMemberId = useRef(null);
  let memberList = useRef([]);


  const roomJoined = async (e) => {
    thisMemberId.current = e.member_id;
    memberList.current = e.room.members;
    let thisMember = memberList.current.find((m) => m.id === e.member_id);
    onRoomUpdate({ thisMemberId: e.member_id, member: thisMember });
    onMemberListUpdate(e.room.members);
    console.log(e.room.members);
    console.log("You have joined the room.");
  };

  const memberJoined = async (e) => {
    console.log(e.member.name + " has joined the room.");
    memberList.current.push(e.member);
    console.log(memberList.current);
    onMemberListUpdate(memberList.current);
  };

  useEffect(() => {
    if (setupDone) return;
    setup_room();
    async function setup_room() {
      setSetupDone(true);
      let room;
      try {
        try {
          room = await SignalWire.Video.createRoomObject({
            token: await getToken(roomDetails),
            rootElementId: "video-root",
            video: true,
          });
        } catch (e) {
          console.log(e);
        }
        room.on("room.joined", async (e) => roomJoined(e));

        room.on("room.updated", async (e) => {
          console.log("Room has been updated");
        });

        room.on("member.joined", async (e) => memberJoined(e));

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
          console.log(memberThatLeft?.name + " has left the room.");
          memberList.current = remainingMembers;
          onMemberListUpdate(memberList.current);
        });

        await room.join();
        onRoomInit(room);
        console.log("You joined");
      } catch (error) {
        console.error("Something went wrong", error);
      }
    }
  }, [roomDetails, onRoomUpdate, onRoomInit, onMemberListUpdate, setupDone]);

  return (
    <div className="w-3/5 h-full px-6 py-6">
      <div id="video-root"></div>
    </div>
  );
};
