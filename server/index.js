require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 9001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const auth = {
  username: process.env.SIGNALWIRE_PROJECT_KEY, // Project-ID
  password: process.env.SIGNALWIRE_TOKEN, // API token
};
const apiurl = process.env.SIGNALWIRE_SPACE;// <your username>.signalwire.com

const permissions = [
  'room.self.audio_mute',
  'room.self.audio_unmute',
  'room.self.video_mute',
  'room.self.video_unmute',
  'room.self.deaf',
  'room.self.undeaf',
  'room.self.set_input_volume',
  'room.self.set_output_volume',
  'room.self.set_input_sensitivity',
  'room.list_available_layouts',
  'room.set_layout',
  'room.member.video_mute',
  'room.member.audio_mute',
  'room.member.remove',
  'room.recording',
  'room.playback'
];

app.post("/api/get_token", async (req, res) => {
  let { user_name, room_name } = req.body;

  console.log(user_name, room_name, apiurl + "/api/video/room_tokens")
  try {
    let token = await axios.post(
      "https://" + apiurl + "/api/video/room_tokens",
      {
        user_name,
        room_name: room_name,
        permissions
      },
      { auth }
    );

    token = token.data?.token;
    return res.json({ token });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

app.get("/api/test", (req, res) => {
  console.log('API call')
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

