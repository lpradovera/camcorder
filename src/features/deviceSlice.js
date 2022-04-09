import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SignalWire from "@signalwire/js";

export const getMicrophone = createAsyncThunk(
  "device/getMicrophone",
  async () => {
    try {
      return await SignalWire.WebRTC.getMicrophoneDevicesWithPermissions();
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const updateMicrophone = createAsyncThunk(
  "device/updateMicrophone",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if(id === undefined) return
      if (state.room.room !== undefined) {
        console.log('hello')
        return await state.room.room.updateMicrophone({
          deviceId: id,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getCameras = createAsyncThunk("device/getCameras", async () => {
  try {
    return await SignalWire.WebRTC.getCameraDevicesWithPermissions();
  } catch (error) {
    console.log(error.message);
  }
});

export const updateCameras = createAsyncThunk(
  "device/updateCameras",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if(id === undefined) return
      if (state.room.room !== undefined) {
        return await state.room.room.updateCamera({
          deviceId: id,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getSpeakers = createAsyncThunk("device/getSpeacers", async () => {
  try {
    return await SignalWire.WebRTC.getSpeakerDevicesWithPermissions();
  } catch (error) {
    console.log(error.message);
  }
});

export const updateSpeakers = createAsyncThunk(
  "device/updateSpeakers",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if(id === undefined) return
      if (state.room.room !== undefined) {
        return await state.room.room.updateSpeaker({
          deviceId: id,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const videoUnmute = createAsyncThunk(
  "device/videoUnmute",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state.room.room.videoUnmute();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const videoMute = createAsyncThunk(
  "device/videoMute",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state.room.room.videoMute();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const audioUnmute = createAsyncThunk(
  "device/audioUnmute",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state.room.room.audioUnmute();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const audioMute = createAsyncThunk(
  "device/audioMute",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state.room.room.audioMute();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const roomUndeaf = createAsyncThunk(
  "device/audioMute",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state.room.room.undeaf();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const roomDeaf = createAsyncThunk(
  "device/audioMute",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state.room.room.deaf();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    microphones: [],
    cameras: [],
    speakers: [],
    videoMuted: false,
    audioMuted: false,
    volumeMuted: false,
  },
  reducers: {
    setVideoMuted(state, { payload }) {
      state.videoMuted = payload;
    },
    setVolumeMuted(state, { payload }) {
      state.volumeMuted = payload;
    },
    setAudioMuted(state, { payload }) {
      state.audioMuted = payload;
    },
  },
  extraReducers: {
    [getMicrophone.pending]: (state, action) => {},
    [getMicrophone.fulfilled]: (state, { payload }) => {
      state.microphones = payload;
    },
    [getMicrophone.rejected]: (state, action) => {},
    //camera
    [getCameras.pending]: (state, action) => {},
    [getCameras.fulfilled]: (state, { payload }) => {
      state.cameras = payload;
    },
    [getCameras.rejected]: (state, action) => {},
    //updateCamera
    [updateCameras.pending]: (state, action) => {},
    [updateCameras.fulfilled]: (state, { payload }) => {
      console.log("update camera");
    },
    [updateCameras.rejected]: (state, action) => {},
    //updateMicrophone
    [updateMicrophone.pending]: (state, action) => {},
    [updateMicrophone.fulfilled]: (state, { payload }) => {
      console.log("update microphone");
    },
    [updateMicrophone.rejected]: (state, action) => {},
    //updateSpeaker
    [updateSpeakers.pending]: (state, action) => {},
    [updateSpeakers.fulfilled]: (state, { payload }) => {
      console.log("update speakers");
    },
    [updateSpeakers.rejected]: (state, action) => {},
    //get speakers
    [getSpeakers.pending]: (state, action) => {},
    [getSpeakers.fulfilled]: (state, { payload }) => {
      state.speakers = payload;
    },
    [getSpeakers.rejected]: (state, action) => {},
    //video unmute
    [videoUnmute.pending]: (state, action) => {},
    [videoUnmute.fulfilled]: (state, { payload }) => {},
    [videoUnmute.rejected]: (state, action) => {},
    //video mute
    [videoMute.pending]: (state, action) => {},
    [videoMute.fulfilled]: (state, { payload }) => {},
    [videoMute.rejected]: (state, action) => {},
    //audio unmute
    [audioUnmute.pending]: (state, action) => {},
    [audioUnmute.fulfilled]: (state, { payload }) => {},
    [audioUnmute.rejected]: (state, action) => {},
    //audio mute
    [audioMute.pending]: (state, action) => {},
    [audioMute.fulfilled]: (state, { payload }) => {},
    [audioMute.rejected]: (state, action) => {},
    //room deaf
    [roomDeaf.pending]: (state, action) => {},
    [roomDeaf.fulfilled]: (state, { payload }) => {},
    [roomDeaf.rejected]: (state, action) => {},
    //room undeaf
    [roomUndeaf.pending]: (state, action) => {},
    [roomUndeaf.fulfilled]: (state, { payload }) => {},
    [roomUndeaf.rejected]: (state, action) => {},
  },
});

export const { setVideoMuted, setAudioMuted, setVolumeMuted } =
  deviceSlice.actions;

export default deviceSlice.reducer;
