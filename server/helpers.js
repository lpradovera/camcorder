const moderatorPermissions = [
  "room.list_available_layouts",
  "room.recording",
  "room.playback",
  "room.set_layout",
  "room.member.audio_mute",
  "room.member.audio_unmute",
  "room.member.deaf",
  "room.member.undeaf",
  "room.member.remove",
  "room.member.set_input_sensitivity",
  "room.member.set_input_volume",
  "room.member.set_output_volume",
  "room.member.video_mute",
  "room.member.video_unmute"
];
const normalPermissions = [
  "room.self.audio_mute",
  "room.self.audio_unmute",
  "room.self.video_mute",
  "room.self.video_unmute",
  "room.self.deaf",
  "room.self.undeaf",
  "room.self.set_input_volume",
  "room.self.set_output_volume",
  "room.self.set_input_sensitivity",
  "room.hide_video_muted",
  "room.show_video_muted"
];

const permissionsCheck = (mod) => {
  if(mod) {
    return [...normalPermissions, ...moderatorPermissions];
  } else {
    normalPermissions;
  }
};

module.exports = { permissionsCheck };