import React, { useState } from "react";
import { useRecord } from "../../../../hooks/useRecord";
import { useVideoStream } from "../../../../hooks/useVideoStream";
import { useAudioStream } from "../../../../hooks/useAudioStream";
import { VideoRecordingSymbol } from "../../../VideoRecordingSymbol/VideoRecordingSymbol";
import { Microphone } from "../../../Icons/Microphone/Microphone";
import { VideoCamera } from "../../../Icons/VideoCamera/VideoCamera";
import { Volume } from "../../../Icons/Volume/Volume";
import { Save } from "../../../Icons/Save/Save";
import { RecordingButton } from "../../../RecordingButton/RecordingButton";

export const ControlPanel = ({ room, memberList, thisMemberId }) => {
  const { startRecording, recording, recordingReady } = useRecord(room);
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
    <>
      <div className="flex py-2 justify-center relative transparent">
        <div className="flex w-2/4 opacity-50 hover:opacity-100 justify-around h-28 rounded-lg bg-slate-600">
          <div className="flex flex-col justify-center">
            <button
              className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"
              onClick={() => videoStream()}
            >
              {videoMuted ? (
                <div className="relative">
                  <VideoCamera />
                  <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                </div>
              ) : (
                <VideoCamera />
              )}
            </button>
            <p className="text-center pt-1 text-slate-300">Cam</p>
          </div>

          <div className="flex flex-col justify-center">
            <button
              className={`flex ${
                recording ? "bg-slate-100" : "bg-slate-500"
              } rounded justify-center pt-3 w-14 h-14`}
              onClick={() => {
                startRecording();
                // if (!recording) {
                //   startRecording();
                // } else {
                //   stopRecording();
                // }
              }}
            >
              {recording ? (
                <div className="animate-pulse border-4 border-red-600 rounded-full w-8 h-8 flex flex-col items-center justify-center">
                  <div className="rounded-full w-5 h-5 bg-red-600"></div>
                </div>
              ) : (
                <div className="border-4 border-slate-100 rounded-full w-8 h-8 flex flex-col items-center justify-center">
                  <div className="rounded-full w-5 h-5 bg-slate-100"></div>
                </div>
              )}
            </button>
            <p className="text-center pt-1 text-slate-300">Record</p>
          </div>

          {/* audio */}
          <div className="flex flex-col justify-center">
            <button
              className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"
              onClick={() => audioStream()}
            >
              {audioMuted ? (
                <div className="relative">
                  <Microphone />
                  <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                </div>
              ) : (
                <Microphone />
              )}
            </button>
            <p className="text-center pt-1 text-slate-300">Mic</p>
          </div>

          {/* volume */}

          <div className="flex flex-col justify-center">
            <button
              className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"
              onClick={() => videoStream()}
            >
              {videoMuted ? (
                <div className="relative">
                  <Volume />
                  <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                </div>
              ) : (
                <Volume />
              )}
            </button>
            <p className="text-center pt-1 text-slate-300">Speaker</p>
          </div>

          {/* get record */}
          <div className="flex flex-col justify-center">
            <button
              className="flex bg-slate-500 rounded justify-center pt-4 w-14 h-14"
              onClick={() => console.log("hel")}
            >
              {recordingReady ? (
                <Save recordingReady={recordingReady} />
              ) : (
                <div className="relative">
                  <Save />
                  <div className="border-r-2 h-7 border-slate-200 rotate-[-45deg] absolute top-[-2px] left-[10px]"></div>
                </div>
              )}
            </button>
            <p className="text-center pt-1 text-slate-300">Save</p>
          </div>
        </div>

        {recording ? (
          <VideoRecordingSymbol position="absolute" bottom="2" right="6" />
        ) : null}
      </div>
    </>
  );
};
