import React, { useCallback, useEffect, useState } from "react";
import { VideoRoom } from "../VideoRoom/VideoRoom";
import { Participants } from "../Participants/Participants";

export const InCall = ({ roomDetails }) => {
  
  const [memberList, setMemberList] = useState([]);

  return (
    <>
      <VideoRoom
        roomDetails={roomDetails}
        onMemberListUpdate={useCallback((list) => {
          setMemberList(list);
        }, [])}
      />

      <Participants memberList={memberList} />
    </>
  );
};
