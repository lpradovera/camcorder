import React, { useEffect, useState } from "react";
import { Eye } from "./components/Eye/Eye";
import { EyeOff } from "./components/EyeOff/EyeOff";
import { Microphone } from "../Icons/Microphone/Microphone";
import { useVideoStream } from "../../hooks/useVideoStream";
import { useAudioStream } from "../../hooks/useAudioStream";

export const Participants = ({
  memberList,
  room,
  thisMemberId,
  roomDetails,
  onMemberUpdate = () => {},
}) => {
  const { videoStream, videoMuted } = useVideoStream(
    room,
    memberList,
    thisMemberId
  );
  const { audioStream, audioMuted } = useAudioStream(
    room,
    memberList,
    thisMemberId
  );

  return (
    <div className="flex flex-col w-2/5 py-">
      <div>
        <h3 className="text-2xl text-silver-100 px-4 pt-16">Participants:</h3>
      </div>
      <ul className="list-decimal text-silver-100 w-4/5">
        {memberList.map((member) => {
          return (
            <div className="flex justify-between px-4 py-4" key={member.id}>
              <li className="text-xl">{member.name}</li>
              <div>
                
                <button className="px-4" onClick={() => videoStream()}>
                  {member.video_muted ? <Eye /> : <EyeOff />}
                </button>
                <button className="px-4" onClick={() => audioStream()}>
                  {member.audio_muted ? <Microphone /> : null}
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
