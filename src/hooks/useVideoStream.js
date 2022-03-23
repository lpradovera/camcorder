import { useState } from "react";

export const useVideoStream = (room, memberList, thisMemberId) => {
  const [videoMuted, setVideoMuted] = useState(false);

  const videoStream = () => {
    memberList.find(async (member) => {
      if (member.id === thisMemberId) {
        if (member.video_muted) {
          try {
            await room.videoUnmute({ memberId: member.id });
            if (member.id === thisMemberId) setVideoMuted(false);
            console.log("You unmute video");
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            await room.videoMute({ memberId: member.id });
            if (member.id === thisMemberId) setVideoMuted(true);
            console.log("You mute video");
          } catch (error) {
            console.log(error);
          }
        }
      }
    });
  };
  return { videoStream, videoMuted };
};
