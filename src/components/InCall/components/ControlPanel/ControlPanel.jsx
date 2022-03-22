import React from "react";

export const ControlPanel = ({ memberList, thisMemberId, onMemberUpdate }) => {
  
  const handleClick = () => {

    memberList.find(member => {
      if(member.id === thisMemberId) {
        if(member.video_muted) {
          onMemberUpdate({
            action: "unmute_video",
            id: member.id,
          })
        } else { 
          onMemberUpdate({
            action: "mute_video",
            id: member.id,
          });
        }
      }
    })
  }
  
  return (
    <>
      <h1>Control</h1>
      <button onClick={() => handleClick()}>mute</button>
    </>
  );
};
