import axios from "axios";

export const getToken = async (roomDetails) => {
  const token = await axios.post("api/get_token", {
    user_name: roomDetails.name,
    room_name: roomDetails.room,
    mod: roomDetails.mod,
  });
  return token.data.token;
};

const addZero = (elem) => {
  if (elem < 9) {
    return `0${elem}`;
  } else {
    return elem;
  }
};
export const getDate = (d) => {
  let date = new Date(d);
  return `${addZero(date.getDate())}.${addZero(date.getMonth())}`;
};

export const handleToggleAudioMute = async (member, room, setAudioMuted) => {
  if (Object.keys(room).length !== 0) {
    if (member.audio_muted) {
      await room.audioUnmute({ memberId: member.id });
      setAudioMuted(false);
    } else {
      await room.audioMute({ memberId: member.id });
      setAudioMuted(true);
    }
  }
};

export const handleSetInputVolume = async (e, member, room) => {
  if (Object.keys(room).length !== 0) {
    await room.setInputVolume({
      memberId: member.id,
      volume: e.target.value,
    });
  }
};

export const handleToggleDeaf = async (room, member) => {
  if (Object.keys(room).length !== 0) {
    if (member.deaf) {
      await room.undeaf({ memberId: member.id });
    } else {
      await room.deaf({ memberId: member.id });
    }
  }
};

export const handleSetOutputVolume = async (e, member, room) => {
  if (Object.keys(room).length !== 0) {
    await room.setOutputVolume({
      memberId: member.id,
      volume: e.target.value,
    });
  }
};

export const handleRemoveMember = async (room, member) => {
  if (Object.keys(room).length !== 0) {
    await room.removeMember({ memberId: member.id });
  }
};

export const handleToggleVideoMute = async (room, member, setVideoMuted) => {
  if (Object.keys(room).length !== 0) {
    if (member.video_muted) {
      await room.videoUnmute({ memberId: member.id });
      setVideoMuted(false);
    } else {
      await room.videoMute({ memberId: member.id });
      setVideoMuted(true);
    }
  }
};
