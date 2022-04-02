import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonWrapper } from "../ButtonComponents/ButtonWrapper/ButtonWrapper";
import { ButtonVideoCamera } from "../ButtonComponents/ButtonVideoCamera/ButtonVideoCamera";
import { ButtonMicrophone } from "../ButtonComponents/ButtonMicrophone/ButtonMicrophone";
import { ButtonVolume } from "../ButtonComponents/ButtonVolume/ButtonVolume";
import { ButtonRemoveMember } from "../ButtonComponents/ButtonRemoveMember/ButtonRemoveMember";
import { InputVolume } from "../ButtonComponents/InputVolume/InputVolume";

export const MemberList = ({
  memberList,
  room,
  onMemberUpdate,
  audioMuted,
}) => {

  const location = useLocation();
  
  return (
    <>
      {memberList.map((member) => {
        return (
          <div
            key={member.id}
            className="shadow-lg mb-2 rounded-lg py-4 px-3 dark:bg-slate-600"
          >
            <div className=" flex justify-between pb-4">
              <span className="dark:text-slate-300 text-lg pt-1">
                {member.name}
              </span>
              {location.state.mod ? (
                <ButtonWrapper>
                  <ButtonVideoCamera
                    member={member}
                    onMemberUpdate={onMemberUpdate}
                  />
                  <ButtonMicrophone
                    member={member}
                    onMemberUpdate={onMemberUpdate}
                  />
                </ButtonWrapper>
              ) : null}
              <div className="w-24 flex justify-between">
                {location.state.name === member.name || location.state.mod ? (
                  <ButtonVolume
                    member={member}
                    onMemberUpdate={onMemberUpdate}
                  />
                ) : null}
                {location.state.mod ? (
                  <ButtonRemoveMember
                    member={member}
                    onMemberUpdate={onMemberUpdate}
                  />
                ) : null}
              </div>
            </div>
            {location.state.name === member.name || location.state.mod ? (
              <InputVolume
                audioMuted={audioMuted}
                room={room}
                member={member}
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
};
