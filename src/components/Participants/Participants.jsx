import React, { useEffect, useState } from "react";
import { Eye } from "./components/Eye/Eye";
import { EyeOff } from "./components/EyeOff/EyeOff";
import { MicrophoneUp } from "./components/MicrophoneUP/MicrophoneUp";
import { MicrophoneOff } from "./components/MicrophoneOff/MicrophoneOff";

export const Participants = ({ memberList, roomDetails, onMemberUpdate = () => {} }) => {
  return (
    <div className="flex flex-col w-2/5 py-">
      <h2 className="text-2xl text-slate-300 pt-6 font-medium">{roomDetails.room}</h2>
      <div>
        <h2 className="text-2xl text-silver-100 px-4 pt-16">Participants:</h2>
      </div>
      <ul className="list-decimal text-silver-100 w-4/5">
        {memberList.map((member) => {
          return (
            <div className="flex justify-between px-4 py-4" key={member.id}>
              <li className="text-xl">
                {member.name}
              </li>
              <div>
                <button
                  className="px-4"
                  onClick={() => {
                    member.video_muted
                      ? onMemberUpdate({
                          action: "unmute_video",
                          id: member.id,
                        })
                      : onMemberUpdate({
                          action: "mute_video",
                          id: member.id,
                        });
                  }}
                >
                  {member.video_muted ? <Eye /> : <EyeOff />}
                </button>
                <button
                  className="px-4"
                  onClick={() => {
                    member.video_muted
                      ? onMemberUpdate({
                          action: "unmute_audio",
                          id: member.id,
                        })
                      : onMemberUpdate({
                          action: "mute_audio",
                          id: member.id,
                        });
                  }}
                >
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
