import React, { useCallback, useEffect, useState } from "react";
import { VideoRoom } from "../VideoRoom/VideoRoom";
import { Participants } from "../Participants/Participants";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { useNavigate } from "react-router-dom";

export const InCall = ({ roomDetails }) => {
  const [memberList, setMemberList] = useState([]);
  let navigate = useNavigate();
  let [room, setRoom] = useState({});
  let rec;
  let [thisMemberId, setThisMemberId] = useState(null);
  let onRoomInit = useCallback((room) => {
    setRoom(room);
  }, []);

  let onRoomUpdate = useCallback(
    (updatedValues) => {
      if (updatedValues.thisMemberId !== undefined)
        setThisMemberId(updatedValues.thisMemberId);
      if (updatedValues.member !== undefined) {
        let mem = updatedValues.member;
        console.log("Current User", mem);
        // setAudioMuted(mem.audio_muted);
        // setVideoMuted(mem.video_muted);
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
    } 
  };

  

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <VideoRoom
          onRoomInit={onRoomInit}
          onRoomUpdate={onRoomUpdate}
          roomDetails={roomDetails}
          onMemberListUpdate={useCallback((list) => {
            setMemberList(list);
          }, [])}
        />
        <Participants
          room={room}
          roomDetails={roomDetails}
          memberList={memberList}
          thisMemberId={thisMemberId}
          onMemberUpdate={(event) => memberUpdate(event)}
        />
      </div>
      <ControlPanel
        room={room}
        roomDetails={roomDetails}
        memberList={memberList}
        thisMemberId={thisMemberId}
        onMemberUpdate={(event) => memberUpdate(event)}
      />
    </div>
  );
};
