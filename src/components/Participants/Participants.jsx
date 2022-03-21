import React, { useEffect } from "react";

export const Participants = ({
  memberList,
}) => {

  return (
    <>
      <h2>Participants</h2>
      <ul>
        {memberList.map((member) => {
          return <li key={member.id}>{member.name}</li>;
        })}
      </ul>
    </>
  );
};
