import React, { useEffect, useRef, useState } from "react";
import * as SignalWire from "@signalwire/js";
import { getToken } from "../../helpers/helpers";
import { useDispatch } from "react-redux";
import { setRoom } from "../../features/roomSlice";
import {
  updateSpeakers,
  updateMicrophone,
  updateCameras,
} from "../../features/deviceSlice";

export const VideoRoom = ({
  onRoomInit,
  onRoomUpdate,
  roomDetails: roomDetails = {
    room: "test",
    name: "tester",
  },
  onMemberListUpdate = () => {},
}) => {
  const dispatch = useDispatch();

  let [setupDone, setSetupDone] = useState(false);
  let thisMemberId = useRef(null);
  let memberList = useRef([]);
  let currLayout = useRef(null);
  let [speakerOverlayStyle, setSpeakerOverlayStyle] = useState({
    display: "none",
  });

  function updateSpeakerOverlay(memberId, speaking) {
    if (!currLayout.current) return;
    const layer = currLayout.current.layers.find(
      (lyr) => lyr.member_id === memberId
    );
    memberList.current.find((member) => {
      if (member.id === memberId) {
        let div = document.querySelector("#name");
        div.innerHTML = member.name;
        //////////////////////////
        //////////volume testing
        //////////////////////////
        if (layer && speaking) {
          let volume = document.querySelector("#volume"),
            num = 20,
            array = new Uint8Array(num * 2),
            logo,
            height,
            src,
            width = 2;

          for (var i = 0; i < num; i++) {
            logo = document.createElement("div");
            logo.style.width = "2px";
            logo.style.height = "0px";
            logo.style.marginTop = "10px";
            logo.style.margin = "2px";
            logo.className = "logo";
            logo.style.borderRadius = "30px";
            logo.style.background = "#475569";
            logo.style.minWidth = width + "px";
            volume.appendChild(logo);
          }

          let myElements = document.querySelectorAll(".logo"),
            context = new AudioContext(),
            analyser = context.createAnalyser();

          navigator.mediaDevices
            .getUserMedia({
              audio: true,
            })
            .then((stream) => {
              src = context.createMediaStreamSource(stream);
              src.connect(analyser);
              loop();
            })
            .catch((error) => {
              console.log(error);
            });

          function loop() {
            try {
              if (volume) {
                window?.requestAnimationFrame(loop);
                analyser?.getByteFrequencyData(array);

                for (var i = 0; i < num; i++) {
                  height = array[i + num];
                  myElements[i].style.minHeight = height / 5 + "px";
                  myElements[i].style.opacity = 0.008 * height;
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
        // volume testing
        //volume2
        if (layer && speaking) {
          let volume2 = document.querySelector("#volume2"),
            num = 20,
            array = new Uint8Array(num * 2),
            logo2,
            height,
            src,
            width = 2;

          for (var i = 0; i < num; i++) {
            logo2 = document.createElement("div");
            logo2.style.width = "2px";
            logo2.style.height = "0px";
            logo2.style.marginTop = "20px";
            logo2.style.margin = "2px";
            logo2.className = "logo2";
            logo2.style.borderRadius = "30px";
            logo2.style.background = "#475569";
            logo2.style.minWidth = width + "px";
            volume2.appendChild(logo2);
          }

          let myElements2 = document.querySelectorAll(".logo2"),
            context = new AudioContext(),
            analyser = context.createAnalyser();

          navigator.mediaDevices
            .getUserMedia({
              audio: true,
            })
            .then((stream) => {
              src = context.createMediaStreamSource(stream);
              src.connect(analyser);
              loop();
            })
            .catch((error) => {
              console.log(error);
            });

          function loop() {
            try {
              if (volume2) {
                window?.requestAnimationFrame(loop);
                analyser?.getByteFrequencyData(array);

                for (var i = 0; i < num; i++) {
                  height = array[i + num];
                  myElements2[i].style.minHeight = height / 5 + "px";
                  myElements2[i].style.opacity = 0.008 * height;
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
        //volume2
      }
    });

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
        // border: "5px solid #034DF6",
        border: "5px solid #475569",
        borderRadius: "1px",
        opacity: "50%",
        pointerEvents: "none",
      });
    } else {
      setSpeakerOverlayStyle({ display: "none" });
    }
  }

  const roomJoined = async (e) => {
    thisMemberId.current = e.member_id;
    memberList.current = e.room.members;
    let thisMember = memberList.current.find((m) => m.id === e.member_id);
    // onRoomUpdate({ thisMemberId: e.member_id, member: thisMember });
    onMemberListUpdate(e.room.members);
    console.log(e.room.members);
    console.log("You have joined the room.");
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
        room.on("room.joined", async (e) => {
          thisMemberId.current = e.member_id;
          memberList.current = e.room.members;
          let thisMember = memberList.current.find((m) => m.id === e.member_id);
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
        room.on("layout.changed", async (e) => {
          // currLayout.current = e.layout; // add this line
          // onRoomUpdate({ layout: e.layout.name });
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
          if (thisMemberId.current === memberThatLeft?.id) {
            console.log("It is you who has left the room");
            onRoomUpdate({ left: true });
          }
          memberList.current = remainingMembers;
          onMemberListUpdate(memberList.current);
        });

        await room.join();

        dispatch(setRoom(room));
        onRoomInit(room);
        //cameras
        let camChangeWatcher = await SignalWire.WebRTC.createDeviceWatcher({
          targets: ["camera"],
        });
        camChangeWatcher.on("changed", (changes) => {
          console.log(changes, "changes cameras");
          dispatch(updateCameras());
        });
        //microphones
        let micChangeWatcher = await SignalWire.WebRTC.createDeviceWatcher({
          targets: ["microphone"],
        });
        micChangeWatcher.on("changed", (changes) => {
          console.log(changes, "changes microphone");
          dispatch(updateMicrophone());
        });
        //speakers
        let speakerChangeWatcher = await SignalWire.WebRTC.createDeviceWatcher({
          targets: ["speaker"],
        });
        speakerChangeWatcher.on("changed", (changes) => {
          console.log(changes, "changes speaker");
          dispatch(updateSpeakers());
        });

        console.log("You joined");
      } catch (error) {
        console.error("Something went wrong", error);
      }
    }
  }, [roomDetails, onRoomUpdate, onRoomInit, onMemberListUpdate, setupDone]);

  return (
    <>
      <div
        className={`w-full relative rounded-lg border-4 border-slate-600`}
        id="video-root"
      >
        <div style={speakerOverlayStyle}>
          <div
            id="name"
            className={`text-slate-200 font-medium pr-2 absolute bottom-2 left-3`}
          ></div>
          <div id="volume" className="rotate-10 flex"></div>
          <div
            id="volume2"
            className="rotate-10 flex top-0 right-0 absolute flex-row-reverse"
          ></div>
        </div>
      </div>
    </>
  );
};
