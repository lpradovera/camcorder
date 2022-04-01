import React, { useEffect, useRef, useState } from "react";
import * as SignalWire from "@signalwire/js";
import { getToken } from "../../helpers/helpers";

export const VideoRoom = ({
  onRoomInit,
  setRecording,
  onRoomUpdate,
  roomDetails: roomDetails = {
    room: "test",
    name: "tester",
  },
  onMemberListUpdate = () => {},
}) => {
  let [setupDone, setSetupDone] = useState(false);
  let thisMemberId = useRef(null);
  let memberList = useRef([]);
  let currLayout = useRef(null);

  let [overlayStyle, setOverlayStyle] = useState({ display: "none" });
  let [speakerOverlayStyle, setSpeakerOverlayStyle] = useState({
    display: "none",
  });

  //
  function updateSpeakerOverlay(memberId, speaking) {
    if (!currLayout.current) return;

    const layer = currLayout.current.layers.find(
      (lyr) => lyr.member_id === memberId
    );

    if (layer && speaking) {
      setSpeakerOverlayStyle({
        display: "block",
        position: "absolute",
        overflow: "hidden",
        top: layer.y + "%",
        left: layer.x + "%",
        width: layer.width + "%",
        height: layer.height + "%",
        zIndex: 1,
        background: "transparent",
        border: "5px solid yellow",
        pointerEvents: "none",
      });
    } else {
      setSpeakerOverlayStyle({ display: "none" });
    }
  }

  // function updateOverlay(e) {
  //   if (!currLayout) return;

  //   // Mouse coordinates relative to the video element, in percentage (0 to 100)
  //   const rect = document.getElementById("video-root").getBoundingClientRect();
  //   const x = (100 * (e.clientX - rect.left)) / rect.width;
  //   const y = (100 * (e.clientY - rect.top)) / rect.height;

  //   const layer = currLayout?.current?.layers.find(
  //     (lyr) =>
  //       lyr.x < x &&
  //       x < lyr.x + lyr.width &&
  //       lyr.y < y &&
  //       y < lyr.y + lyr.height
  //   );
  //   if (layer && layer.reservation !== "fullscreen") {
  //     setOverlayStyle({
  //       display: "block",
  //       position: "absolute",
  //       overflow: "hidden",
  //       top: layer.y + "%",
  //       left: layer.x + "%",
  //       width: layer.width + "%",
  //       height: layer.height + "%",
  //       zIndex: 1,
  //       background: "#0d6efd38",
  //       backdropFilter: "blur(10px)",
  //       pointerEvents: "none",
  //     });
  //   } else {
  //     setOverlayStyle({ display: "none" });
  //   }
  // }
  //

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
          setRecording(e.room.recording);
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
        room.on("layout.changed", async (e) => {
          currLayout.current = e.layout; // add this line
          onRoomUpdate({ layout: e.layout.name });
        });
        room.on("member.talking", (e) => {
          // Update the UI: the participant with id `e.member.id` is talking iff e.member.talking == true
          updateSpeakerOverlay(e.member.id, e.member.talking);
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
    <>
      <div
        className=" w-3/5 relative"
        id="video-root"
        // onMouseOver={updateOverlay}
        // onMouseMove={updateOverlay}
        // onMouseLeave={updateOverlay}
      >
        {/* <div style={overlayStyle}></div> */}
        <div style={speakerOverlayStyle}></div>
      </div>
    </>
  );
};
