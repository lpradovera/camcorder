import { useState } from "react";

export const useAudioStream = (room, memberList, thisMemberId) => {
  const [audioMuted, setAudioMuted] = useState(false);

  const audioStream = () => {
    memberList.find(async (member) => {
      if (member.id === thisMemberId) {
        if (member.audio_muted) {
          try {
            await room.audioUnmute({ memberId: member.id });
            if (member.id === thisMemberId) setAudioMuted(false);
            console.log(member, "You unmute audio");
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            await room.audioMute({ memberId: member.id });
            if (member.id === thisMemberId) setAudioMuted(true);
            console.log(member, "You mute audio");
          } catch (error) {
            console.log(error);
          }
        }
      }
    });
  };
  return { audioStream, audioMuted };
};