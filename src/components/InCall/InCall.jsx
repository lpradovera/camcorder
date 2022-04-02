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
  const [volumeMuted, setVolumeMuted] = useState(false);
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
      await room.setOutputVolume({ memberId: event.id, volume: event.volume });
    } else if (event.action === "unmute_volume") {
      await room.setOutputVolume({ memberId: event.id, volume: event.volume });
    }
  };
  const url = "https://s3.us-east-2.amazonaws.com/files.signalwire.com/05c46edd-af7b-43c1-9480-a44af999f430/29bba2d4-ddf1-4569-8b4a-5914440a5e13/video-room-recordings/47f2c82b-a1bb-4eda-839f-a0731c11183a.mp4?response-content-disposition=attachment%3B%20filename%3D%2247f2c82b-a1bb-4eda-839f-a0731c11183a.mp4%22&response-content-type=video%2Fmp4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIFVMIZFZVKLWJ3YQ%2F20220401%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220401T151801Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=db369f27133e0feb9ad141bdb6391253b43bdecf288afc3376c4fa4e81943d36"
  return (
    <div className="flex flex-col h-screen overflow-hidden dark:bg-slate-700 relative">
      
      <VideoRoomWrapper offset={offset}>
        <VideoRoom
          offset={offset}
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
          setVolumeMuted={setVolumeMuted}
          volumeMuted={volumeMuted}
          videoMuted={videoMuted}
          memberList={memberList}
          audioMuted={audioMuted}
        />
    
      </div>
    </div>
  );
};
