import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonVideoCamera } from "../ButtonComponents/ButtonVideoCamera/ButtonVideoCamera";
import { ButtonMicrophone } from "../ButtonComponents/ButtonMicrophone/ButtonMicrophone";
import { ButtonVolume } from "../ButtonComponents/ButtonVolume/ButtonVolume";
import { ButtonRemoveMember } from "../ButtonComponents/ButtonRemoveMember/ButtonRemoveMember";
import { InputVolume } from "../ButtonComponents/InputVolume/InputVolume";
import { OutputVolume } from "../ButtonComponents/OutputVolume/OutputVolume";

export const MemberList = ({
  memberList,
  room,
  setVideoMuted,
  setAudioMuted,
}) => {
  const location = useLocation();

  return (
    <>
      {memberList.map((member) => {
        return (
          <div
            key={member.id}
            className="shadow-lg mb-2 rounded-lg py-2 px-2 dark:bg-slate-700"
          >
            <div className=" flex justify-between pb-4">
              <span className="dark:text-slate-300 text-lg pt-1 pr-3">
                {member.name}
              </span>
              {location.state.mod ? (
                <div className="w-2/5">
                  <ButtonVideoCamera
                    room={room}
                    member={member}
                    setVideoMuted={setVideoMuted}
                  />
                </div>
              ) : null}
              <div className="w-24 flex justify-end">
                {location.state.mod ? (
                  <ButtonRemoveMember room={room} member={member} />
                ) : null}
              </div>
            </div>
            {location.state.name === member.name || location.state.mod ? (
              <>
                <div className="flex justify-between">
                  <InputVolume room={room} member={member} />
                  <ButtonMicrophone
                    room={room}
                    member={member}
                    setAudioMuted={setAudioMuted}
                  />
                </div>
                <div className="flex justify-between pt-4">
                  <OutputVolume room={room} member={member} />
                  <ButtonVolume room={room} member={member} />
                </div>
              </>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
