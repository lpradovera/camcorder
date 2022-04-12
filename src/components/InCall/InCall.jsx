import React, { useCallback, useState, useEffect } from "react";
import { VideoRoom } from "../VideoRoom/VideoRoom";
import { Participants } from "../Participants/Participants";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { ParticipantsWrapper } from "./components/ParticipantsWrapper/ParticipantsWrapper";
import { useHandleHide } from "../../hooks/useHandleHide";
import { VideoRoomWrapper } from "./components/VideoRoomWrapper/VideoRoomWrapper";
import { useNavigate } from "react-router-dom";
import { InCallWrapper } from "../InCallWrapper/InCallWrapper";
import { VideoParticipantsWrapper } from "../VideoParticipantsWrapper/VideoParticipantsWrapper";
import { ControlPanelWrapper } from "./components/ControlPanelWrapper/ControlPanelWrapper";
import { useDispatch } from "react-redux";
import { getLayout } from "../../features/layoutSlice";
import {
  updateSpeakers,
  updateMicrophone,
  updateCameras,
} from "../../features/deviceSlice";

export const InCall = ({ roomDetails }) => {
  const dispatch = useDispatch();

  const [memberList, setMemberList] = useState([]);
  const [thisMemberId, setThisMemberId] = useState(null);
  const [left, setLeft] = useState(false);
  const navigate = useNavigate();
  const { handleHide, offset } = useHandleHide();

  let onRoomUpdate = useCallback(
    (updatedValues) => {
      console.log(updatedValues);
      if (updatedValues.left === true) {
        navigate("/", {
          state: {},
        });
      }
      if (updatedValues.thisMemberId !== undefined)
        setThisMemberId(updatedValues.thisMemberId);
      if (updatedValues.layout !== undefined) dispatch(getLayout());
      if (updatedValues.cameras !== undefined) {
      }
      dispatch(updateCameras());
      if (updatedValues.speakers !== undefined) dispatch(updateMicrophone());
      if (updatedValues.microphones !== undefined) dispatch(updateSpeakers());
    },
    [history]
  );
  useEffect(() => {
    dispatch(getLayout());
  }, [thisMemberId]);
  useEffect(() => {
    return () => {
      setThisMemberId();
    };
  }, []);

  return (
    <InCallWrapper>
      <VideoParticipantsWrapper>
        <VideoRoomWrapper offset={offset}>
          <VideoRoom
            setLeft={setLeft}
            onRoomUpdate={onRoomUpdate}
            roomDetails={roomDetails}
            onMemberListUpdate={useCallback((list) => {
              setMemberList(list);
            }, [])}
          />
        </VideoRoomWrapper>

        <ParticipantsWrapper offset={offset}>
          <Participants
            offset={offset}
            handleHide={handleHide}
            memberList={memberList}
          />
        </ParticipantsWrapper>
      </VideoParticipantsWrapper>
      
      <ControlPanelWrapper>
        <ControlPanel roomDetails={roomDetails} />
      </ControlPanelWrapper>
    </InCallWrapper>
  );
};
