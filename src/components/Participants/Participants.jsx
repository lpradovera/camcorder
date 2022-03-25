import React, { useState } from "react";
import { VideoCamera } from "../Icons/VideoCamera/VideoCamera";
import { Microphone } from "../Icons/Microphone/Microphone";
import { Chevron } from "../Icons/Chevron/Chevron";
import { ChevronLeft } from "../Icons/ChevronLeft/ChevronLeft";

export const Participants = ({
  memberList,
  offset,
  handleHide,
  onMemberUpdate = () => {},
}) => {
  // const [offset, setOffset] = useState("-290");

  // const handleHide = () => {
  //   if (offset === "-290") {
  //     setOffset("0");
  //   } else {
  //     setOffset("-290");
  //   }
  // };

  return (
    <div
      className=""
    >
      <div className="p-[24px] transition flex justify-between items-center relative">
        <button
          onClick={() => handleHide()}
          className="flex dark:bg-slate-600 hover:dark:bg-slate-400 rounded-full items-center absolute left-[-20px] top-[20px]"
        >
          {offset ? <Chevron /> : <ChevronLeft />}
        </button>
      </div>
      <div className="px-11 py-8">
        <ul>
          {memberList.map((member) => {
            return (
              <div className=" flex justify-between" key={member.id}>
                <li className="dark:text-slate-400">{member.name}</li>
                <div className="flex justify-around w-2/5">
                  <button
                    onClick={() => {
                      if (member.video_muted) {
                        onMemberUpdate({
                          action: "unmute_video",
                          id: member.id,
                        });
                      } else {
                        onMemberUpdate({
                          action: "mute_video",
                          id: member.id,
                        });
                      }
                    }}
                  >
                    {member.video_muted ? (
                      <div className="relative">
                        <VideoCamera />
                        <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                      </div>
                    ) : (
                      <VideoCamera />
                    )}
                  </button>

                  <button
                    onClick={() => {
                      if (member.audio_muted) {
                        onMemberUpdate({
                          action: "unmute_audio",
                          id: member.id,
                        });
                      } else {
                        onMemberUpdate({
                          action: "mute_audio",
                          id: member.id,
                        });
                      }
                    }}
                  >
                    {member.audio_muted ? (
                      <div className="relative">
                        <Microphone />
                        <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                      </div>
                    ) : (
                      <Microphone />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
