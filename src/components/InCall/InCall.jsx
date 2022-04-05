import React, { useCallback, useState } from "react";
import { VideoRoom } from "../VideoRoom/VideoRoom";
import { Participants } from "../Participants/Participants";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { ParticipantsWrapper } from "./components/ParticipantsWrapper/ParticipantsWrapper";
import { useHandleHide } from "../../hooks/useHandleHide";
import { useOnRoomInit } from "../../hooks/useOnRoomInit";
import { VideoRoomWrapper } from "./components/VideoRoomWrapper/VideoRoomWrapper";
import { useNavigate } from "react-router-dom";
import { InCallWrapper } from "../InCallWrapper/InCallWrapper";
import { VideoParticipantsWrapper } from "../VideoParticipantsWrapper/VideoParticipantsWrapper";
import { ControlPanelWrapper } from "./components/ControlPanelWrapper/ControlPanelWrapper";


export const InCall = ({ roomDetails }) => {
  const [memberList, setMemberList] = useState([]);
  let navigate = useNavigate();
  const [videoMuted, setVideoMuted] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [volumeMuted, setVolumeMuted] = useState(false);
  const [recording, setRecording] = useState(false);
  let [curLayout, setCurLayout] = useState();
  let [thisMemberId, setThisMemberId] = useState(null);
  const { handleHide, offset } = useHandleHide();
  const { room, onRoomInit } = useOnRoomInit();

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

  return (
    <InCallWrapper>
      <button onClick={() => console.log(curLayout)}>click</button>
      <VideoParticipantsWrapper>
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
            setVideoMuted={setVideoMuted}
            setAudioMuted={setAudioMuted}
            audioMuted={audioMuted}
            handleHide={handleHide}
            memberList={memberList}
            onMemberUpdate={(event) => memberUpdate(event)}
          />
        </ParticipantsWrapper>
      </VideoParticipantsWrapper>

      <ControlPanelWrapper>
        <ControlPanel
          setCurLayout={setCurLayout}
          curLayout={curLayout}
          recording={recording}
          room={room}
          roomDetails={roomDetails}
          setVideoMuted={setVideoMuted}
          setAudioMuted={setAudioMuted}
          setVolumeMuted={setVolumeMuted}
          volumeMuted={volumeMuted}
          videoMuted={videoMuted}
          audioMuted={audioMuted}
        />
      </ControlPanelWrapper>
    </InCallWrapper>
  );
};
