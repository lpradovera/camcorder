import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as SignalWire from "@signalwire/js";

export const getMic = createAsyncThunk("video/getMic", async () => {
  try {
    return await SignalWire.WebRTC.getMicrophoneDevicesWithPermissions();
  } catch (error) {
    console.log(error.message);
  }
});









const videoSlice = createSlice({
  name: "video",
  initialState: {
    status: "loading",
    microphones: [],
  },
  reducers: {
    getMessage(state, { payload }) {
      console.log(state.status);
    },
  },
  extraReducers: {
    [getMic.pending]: (state, action) => {},
    [getMic.fulfilled]: (state, { payload }) => {
      state.microphones = payload;
    },
    [getMic.rejected]: (state, action) => {},
  },
});

export const { getMessage } = videoSlice.actions;

export default videoSlice.reducer;
