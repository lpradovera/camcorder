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

export const updateMicrophone = createAsyncThunk("device/updateMicrophone", async (data) => {
  let room = data.room,
    deviceId = data.id;
  try {
    return await room.updateMicrophone({
      deviceId: deviceId
    });
  } catch (error) {
    console.log(error.message);
  }
});

export const getCameras = createAsyncThunk("device/getCameras", async () => {
  try {
    return await SignalWire.WebRTC.getCameraDevicesWithPermissions();
  } catch (error) {
    console.log(error.message);
  }
});

export const updateCameras = createAsyncThunk("device/updateCameras", async (data) => {
  let room = data.room,
    deviceId = data.id;
  try {
    return await room.updateCamera({
      deviceId: deviceId
    });
  } catch (error) {
    console.log(error.message);
  }
});

export const getSpeakers = createAsyncThunk("device/getSpeacers", async () => {
  try {
    return await SignalWire.WebRTC.getSpeakerDevicesWithPermissions();
  } catch (error) {
    console.log(error.message);
  }
});

export const updateSpeakers = createAsyncThunk("device/updateSpeakers", async (data) => {
  let room = data.room,
    deviceId = data.id;
  try {
    return await room.updateSpeaker({
      deviceId: deviceId
    });
  } catch (error) {
    console.log(error.message);
  }
});




const deviceSlice = createSlice({
  name: "device",
  initialState: {
    microphones: [],
    cameras: [],
    speakers: [],
    videoMuted: false,
  },
  reducers: {
    setVideoMuted(state, { payload }) {
      state.videoMuted = payload;
    }
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
      console.log('updateCamera');
    },
    [updateCameras.rejected]: (state, action) => {},
    //updateMicrophone
    [updateMicrophone.pending]: (state, action) => {},
    [updateMicrophone.fulfilled]: (state, { payload }) => {
      console.log('updateCamera');
    },
    [updateMicrophone.rejected]: (state, action) => {},
    //get speakers
    [getSpeakers.pending]: (state, action) => {},
    [getSpeakers.fulfilled]: (state, { payload }) => {
      state.speakers = payload;
    },
    [getSpeakers.rejected]: (state, action) => {},
  },
});

export const {setVideoMuted} = deviceSlice.actions;

export default deviceSlice.reducer;
