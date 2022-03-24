import React, { useState } from "react";
import { VideoCamera } from "../Icons/VideoCamera/VideoCamera";
import { Microphone } from "../Icons/Microphone/Microphone";
import { Chevron } from "../Icons/Chevron/Chevron";
import { ChevronLeft } from "../Icons/ChevronLeft/ChevronLeft";
import { useVideoStream } from "../../hooks/useVideoStream";
import { useAudioStream } from "../../hooks/useAudioStream";

export const Participants = ({
  memberList,
  room,
  thisMemberId,
  roomDetails,
  onMemberUpdate = () => {},
}) => {
  const [offset, setOffset] = useState("-290");
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

  const handleHide = () => {
    if (offset === "-290") {
      setOffset("0");
    } else {
      setOffset("-290");
    }
  };

  return (
    <div
      className={`w-[311px] ${
        offset !== "0" ? "animate-pulse" : null
      } dark:bg-slate-700 shadow-xl absolute right-[${offset}px] h-screen`}
    >
      <div className="p-[24px] transition flex justify-between items-center relative">
        <button
          onClick={() => handleHide()}
          className="flex dark:bg-slate-600 hover:dark:bg-slate-400 rounded-full items-center absolute left-[-20px] top-[20px]"
        >
          {offset !== "-290" ? (
            <Chevron />
          ) : (
            <ChevronLeft />
          )}
        </button>
      </div>
      <div className="px-11 py-8">
        <ul>
          {memberList.map((member) => {
            return (
              <div className=" flex justify-between" key={member.id}>
                <li className="dark:text-slate-400">{member.name}</li>
                <div className="flex justify-around w-2/5">
                  <button onClick={() => videoStream()}>
                    {videoMuted ? (
                      <div className="relative">
                        <VideoCamera />
                        <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                      </div>
                    ) : (
                      <VideoCamera />
                    )}
                  </button>

                  <button onClick={() => audioStream()}>
                    {audioMuted ? (
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
