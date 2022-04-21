import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonVideoCamera } from "../ButtonComponents/ButtonVideoCamera/ButtonVideoCamera";
import { ButtonMicrophone } from "../ButtonComponents/ButtonMicrophone/ButtonMicrophone";
import { ButtonVolume } from "../ButtonComponents/ButtonVolume/ButtonVolume";
import { ButtonRemoveMember } from "../ButtonComponents/ButtonRemoveMember/ButtonRemoveMember";
import { InputVolume } from "../ButtonComponents/InputVolume/InputVolume";
import { OutputVolume } from "../ButtonComponents/OutputVolume/OutputVolume";
import { MemberListWrapper } from "./components/MemberListWrapper/MemberListWrapper";
import { MemberNameWrapper } from "./components/MemberNameWrapper/MemberNameWrapper";
import { MemberName } from "./components/MemberName/MemberName";

export const MemberList = ({ memberList }) => {
  const location = useLocation();
  const { mod, name } = location?.state;

  return (
    <>
      {memberList &&
        memberList.map((member) => {
          return (
            <MemberListWrapper key={member.id}>
              <MemberNameWrapper>
                <MemberName name={member.name} />
                {mod ? (
                  <div className="w-2/5">
                    <ButtonVideoCamera member={member} />
                  </div>
                ) : null}
                <div className="w-24 flex justify-end">
                  {mod ? <ButtonRemoveMember member={member} /> : null}
                </div>
              </MemberNameWrapper>
              {(name === member.name) || mod ? (
                <>
                  <div className="flex justify-between">
                    <InputVolume member={member} />
                    <ButtonMicrophone member={member} />
                  </div>
                  <div className="flex justify-between pt-4">
                    <OutputVolume member={member} />
                    <ButtonVolume member={member} />
                  </div>
                </>
              ) : null}
            </MemberListWrapper>
          );
        })}
    </>
  );
};
