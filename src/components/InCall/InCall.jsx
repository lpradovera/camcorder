import React, { useCallback, useEffect, useState } from "react";
import { VideoRoom } from "../VideoRoom/VideoRoom";
import { Participants } from "../Participants/Participants";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { useNavigate } from "react-router-dom";

export const InCall = ({ roomDetails }) => {
  const [memberList, setMemberList] = useState([]);
  let navigate = useNavigate();
  const [offset, setOffset] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  let [room, setRoom] = useState({});
  let [thisMemberId, setThisMemberId] = useState(null);
  let onRoomInit = useCallback((room) => {
    setRoom(room);
  }, []);

  const handleHide = () => {
      if (!offset) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };

  let onRoomUpdate = useCallback(
    (updatedValues) => {
      if (updatedValues.thisMemberId !== undefined)
        setThisMemberId(updatedValues.thisMemberId);
      if (updatedValues.member !== undefined) {
        let mem = updatedValues.member;
        console.log("Current User", mem);
        setAudioMuted(mem.audio_muted);
        setVideoMuted(mem.video_muted);
      }
    },
    [history]
  );
  const memberUpdate = async (event) => {
    if (event.action === "remove") {
      console.log("Removing Member", event.id);
      await room.removeMember({ memberId: event.id });
      console.log("Removed member", event.id);
      if (event.id === thisMemberId) navigate("/");
    } else if (event.action === "mute_video") {
      await room.videoMute({ memberId: event.id });
      if (event.id === thisMemberId) setVideoMuted(true);
    } else if (event.action === "mute_audio") {
      await room.audioMute({ memberId: event.id });
      if (event.id === thisMemberId) setAudioMuted(true);
    } else if (event.action === "unmute_audio") {
      await room.audioUnmute({ memberId: event.id });
      if (event.id === thisMemberId) setAudioMuted(false);
    } else if (event.action === "unmute_video") {
      await room.videoUnmute({ memberId: event.id });
      if (event.id === thisMemberId) setVideoMuted(false);
    }
  };

  return (
    <div className="flex flex-col h-screen dark:bg-slate-700">
      <div className="flex flex-row">
        <VideoRoom
          onRoomInit={onRoomInit}
          onRoomUpdate={onRoomUpdate}
          roomDetails={roomDetails}
          onMemberListUpdate={useCallback((list) => {
            setMemberList(list);
          }, [])}
        />
      </div>
      <div className={`w-[311px] ${
        offset ? "animate-pulse" : null
      } dark:bg-slate-700 shadow-xl absolute ${offset ? 'right-0' : 'right-[-290px]'} h-screen`}>
      <Participants
          offset={offset}
          handleHide={handleHide}
          memberList={memberList}
          onMemberUpdate={(event) => memberUpdate(event)}
        />
      </div>
      <div className="fixed w-full bottom-10 flex flex-col justify-end">
        <ControlPanel
          room={room}
          setVideoMuted={setVideoMuted}
          setAudioMuted={setAudioMuted}
          videoMuted={videoMuted}
          audioMuted={audioMuted}
        />
      </div>
    </div>
  );
};
