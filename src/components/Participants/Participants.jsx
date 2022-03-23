import React, { useEffect, useState } from "react";
import { Eye } from "./components/Eye/Eye";
import { EyeOff } from "./components/EyeOff/EyeOff";
import { MicrophoneUp } from "./components/MicrophoneUP/MicrophoneUp";
import { MicrophoneOff } from "./components/MicrophoneOff/MicrophoneOff";
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
      <h2 className="text-2xl text-slate-300 pt-6 font-medium">
        Room name: {roomDetails.room}
      </h2>
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
                  {member.audio_muted ? <MicrophoneUp /> : <MicrophoneOff />}
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
