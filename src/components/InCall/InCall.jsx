import React, { useCallback, useState} from "react";
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
import { useDispatch } from "react-redux";
import { getLayout } from '../../features/layoutSlice'

export const InCall = ({ roomDetails }) => {
  const dispatch = useDispatch();
  const [memberList, setMemberList] = useState([]);
  let [thisMemberId, setThisMemberId] = useState(null);
  let navigate = useNavigate();
  const { handleHide, offset } = useHandleHide();
  const { room, onRoomInit } = useOnRoomInit();

  let onRoomUpdate = useCallback(
    (updatedValues) => {
      console.log(updatedValues)
      if (updatedValues.left === true) navigate("/");
      if (updatedValues.thisMemberId !== undefined)
        setThisMemberId(updatedValues.thisMemberId);
      if (updatedValues.layout !== undefined)
        dispatch(getLayout())
        // setCurLayout(updatedValues.layout);
    },
    [history]
  );

  return (
    <InCallWrapper>
      <VideoParticipantsWrapper>
        <VideoRoomWrapper offset={offset}>
          <VideoRoom
            offset={offset}
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
            handleHide={handleHide}
            memberList={memberList}
            onMemberUpdate={(event) => memberUpdate(event)}
          />
        </ParticipantsWrapper>
      </VideoParticipantsWrapper>

      <ControlPanelWrapper>
        <ControlPanel roomDetails={roomDetails} />
      </ControlPanelWrapper>
    </InCallWrapper>
  );
};
