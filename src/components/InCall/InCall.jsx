import React, { useCallback, useEffect, useState } from "react";
import { VideoRoom } from "../VideoRoom/VideoRoom";
import { Participants } from "../Participants/Participants";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { ParticipantsWrapper } from "./components/ParticipantsWrapper/ParticipantsWrapper";
import { useHandleHide } from "../../hooks/useHandleHide";
import { useOnRoomInit } from "../../hooks/useOnRoomInit";
import { VideoRoomWrapper } from "./components/VideoRoomWrapper/VideoRoomWrapper";
import { useNavigate, useLocation } from "react-router-dom";

export const InCall = ({ roomDetails }) => {
  const [memberList, setMemberList] = useState([]);
  let navigate = useNavigate();
  const location = useLocation();
  const [videoMuted, setVideoMuted] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [recording, setRecording] = useState(false);
  let [curLayout, setCurLayout] = useState();
  let [thisMemberId, setThisMemberId] = useState(null);
  const { handleHide, offset } = useHandleHide();
  const { room, layout, onRoomInit } = useOnRoomInit();

  let onRoomUpdate = useCallback(
    (updatedValues) => {
      if (updatedValues.cameras !== undefined)
        setCameras(updatedValues.cameras);
      if (updatedValues.speakers !== undefined)
        setSpeakers(updatedValues.speakers);
      if (updatedValues.microphones !== undefined)
        setMicrophones(updatedValues.microphones);
      if (updatedValues.left === true) navigate("/");
      if (updatedValues.thisMemberId !== undefined)
        setThisMemberId(updatedValues.thisMemberId);
      if (updatedValues.layout !== undefined)
        setCurLayout(updatedValues.layout);
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
    } else if (event.action === "mute_volume") {
      await room.setOutputVolume({memberId: event.id, volume: event.volume});
    } else if (event.action === "unmute_volume") {
      await room.setOutputVolume({memberId: event.id, volume: event.volume});
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden dark:bg-slate-700 relative">
      <VideoRoomWrapper offset={offset}>
        <VideoRoom
          setRecording={setRecording}
          members={memberList}
          onRoomInit={onRoomInit}
          onRoomUpdate={onRoomUpdate}
          roomDetails={roomDetails}
          onMemberListUpdate={useCallback((list) => {
            setMemberList(list);
          }, [])}
        />
      </VideoRoomWrapper>

      <ParticipantsWrapper offset={offset}>
        <Participants
          room={room}
          offset={offset}
          audioMuted={audioMuted}
          handleHide={handleHide}
          memberList={memberList}
          onMemberUpdate={(event) => memberUpdate(event)}
        />
      </ParticipantsWrapper>

      <div className="fixed w-full bottom-10 flex flex-col justify-end">
        <ControlPanel
          recording={recording}
          room={room}
          roomDetails={roomDetails}
          setVideoMuted={setVideoMuted}
          setAudioMuted={setAudioMuted}
          videoMuted={videoMuted}
          audioMuted={audioMuted}
        />
      </div>
    </div>
  );
};
