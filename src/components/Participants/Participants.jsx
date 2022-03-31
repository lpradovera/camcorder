import React from "react";
import { InputVolume } from "./components/InputVolume/InputVolume";
import { ButtonVideoCamera } from "./components/ButtonVideoCamera/ButtonVideoCamera";
import { ButtonMicrophone } from "./components/ButtonMicrophone/ButtonMicrophone";
import { ButtonWrapper } from "./components/ButtonWrapper/ButtonWrapper";
import { ButtonChevron } from "./components/ButtonChevron/ButtonChevron";
import { useLocation } from "react-router-dom";

export const Participants = ({
  memberList,
  room,
  offset,
  handleHide,
  onMemberUpdate,
}) => {
  const location = useLocation();

  return (
    
    <>
      <ButtonChevron handleHide={handleHide} offset={offset} />
      <div className={`px-2 py-8 ${offset ? 'hidden' : 'block'}`}>
        {memberList.map((member) => {
          return (
            <div key={member.id} className="shadow-lg mb-2 rounded-lg py-4 px-3 dark:bg-slate-600">
              <div className=" flex justify-between pb-4">
                <span className="dark:text-slate-300 pt-1">{member.name}</span>
                {location.state.mod ? 
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
              : null}
              </div>
              {(location.state.name === member.name) || location.state.mod ? 
               <InputVolume room={room} member={member} /> : null}
            </div>
          );
        })}
      </div>
    </>
  );
};
