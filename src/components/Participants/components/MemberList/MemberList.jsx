import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonVideoCamera } from "../ButtonComponents/ButtonVideoCamera/ButtonVideoCamera";
import { ButtonMicrophone } from "../ButtonComponents/ButtonMicrophone/ButtonMicrophone";
import { ButtonVolume } from "../ButtonComponents/ButtonVolume/ButtonVolume";
import { ButtonRemoveMember } from "../ButtonComponents/ButtonRemoveMember/ButtonRemoveMember";
import { InputVolume } from "../ButtonComponents/InputVolume/InputVolume";
import { OutputVolume } from "../ButtonComponents/OutputVolume/OutputVolume";

export const MemberList = ({ memberList }) => {
  const location = useLocation();
  const { mod, name } = location?.state;

  return (
    <>
      {memberList &&
        memberList.map((member) => {
          return (
            <div
              key={member.id}
              className="shadow-lg mb-2 rounded-lg py-2 px-2 dark:bg-slate-700"
            >
              <div className=" flex justify-between pb-4">
                <span className="dark:text-slate-300 text-lg pt-1 pr-3">
                  {member.name}
                </span>
                {mod ? (
                  <div className="w-2/5">
                    <ButtonVideoCamera member={member} />
                  </div>
                ) : null}
                <div className="w-24 flex justify-end">
                  {mod ? (
                    <ButtonRemoveMember member={member} />
                  ) : null}
                </div>
              </div>
              {name === member.name || mod ? (
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
            </div>
          );
        })}
    </>
  );
};
