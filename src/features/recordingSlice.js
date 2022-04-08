import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getRecordings = createAsyncThunk("recording/getRecordings", async (room) => {
  try {
    return await room.getRecordings();
  } catch (error) {
    console.log(error.message);
  }
});

export const play = createAsyncThunk("recording/Play", async (data, thunkAPI) => {
  let id = data.id,
    room = data.room;
  const state = thunkAPI.getState();
  try {
    if(state.recording.expect) return
    let uri = await axios.get(`http://localhost:8080/get_recording/${id}`)
    return await room.play({ url: uri.data.uri });

  } catch (error) {
    console.log(error.message);
  }
});

export const resume = createAsyncThunk("recording/Resume", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    if(state?.recording?.currentPlayback === undefined) return
    return await state?.recording?.currentPlayback.resume();
  } catch (error) {
    console.log(error.message, 'hello');
  }
});

export const pause = createAsyncThunk("recording/Pause", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    if(state?.recording?.currentPlayback === undefined) return
    return await state?.recording?.currentPlayback.pause();
  } catch (error) {
    console.log(error.message);
  }
});

export const stop = createAsyncThunk("recording/Stop", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    if(state?.recording?.currentPlayback === undefined) return
    if(typeof state?.recording?.currentPlayback.stop === 'function') {
      return await state?.recording?.currentPlayback.stop();
    }
    
  } catch (error) {
    console.log(error.message);
  }
});







const recordingSlice = createSlice({
  name: "recording",
  initialState: {
    status: "loading",
    expect: false,
    recordings: [],
    recordingObj: {},
    currentPlayback: {},
    record: false,
  },
  reducers: {
    setExpect(state, { payload } ) {
      state.expect = payload;
    },
    setRecord(state, { payload }) {
      state.record = payload;
    }
  },
  extraReducers: {
    //getRecordings
    [getRecordings.pending]: (state, action) => {},
    [getRecordings.fulfilled]: (state, { payload }) => {
      state.recordings = payload;
      
    },
    [getRecordings.rejected]: (state, action) => {},
    //play
    [play.pending]: (state, action) => {},
    [play.fulfilled]: (state, { payload }) => {
      state.currentPlayback = payload;
      state.expect = true;
    },
    [play.rejected]: (state, action) => {},
    //resume
    [resume.pending]: (state, action) => {},
    [resume.fulfilled]: (state, { payload }) => {
      state.expect = false;
    },
    [resume.rejected]: (state, action) => {},
    //pause
    [pause.pending]: (state, action) => {},
    [pause.fulfilled]: (state, { payload }) => {
      state.expect = false;
    },
    [pause.rejected]: (state, action) => {},
    //stop
    [stop.pending]: (state, action) => {},
    [stop.fulfilled]: (state, { payload }) => {
      state.expect = false;
    },
    [stop.rejected]: (state, action) => {},
  },
});

export const { setExpect, setRecord } = recordingSlice.actions;

export default recordingSlice.reducer;
