import React, { useEffect, useState } from "react";

export const Participants = ({ memberList, onMemberUpdate = () => {} }) => {
  return (
    <div className="flex flex-col w-2/5 py-4 border-2 border-silver-100">
      <div>
        <h2 className="border-2 text-silver-100 px-4 py-4">
          Participants:
        </h2>
      </div>
      <ul className="list-none text-silver-100">
        {memberList.map((member) => {
          return (
            <div className="py-2 px-2 border-2" key={member.id}>
              <li>
                {member.name}
                <button
                  className="ml-4"
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
                  {member.video_muted ? "Unmute Video" : "Mute Video"}
                </button>
                <button
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
                  {member.audio_muted ? "Unmute Audio" : "Mute Audio"}
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
