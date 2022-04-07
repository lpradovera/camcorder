import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getLayout = createAsyncThunk("layout/getLayout", async (room) => {
  try {
    if (typeof room.getLayouts === "function") {
      return (await room.getLayouts()).layouts;
    }
  } catch (error) {
    console.log(error.message);
  }
});

export const shareScreen = createAsyncThunk(
  "layout/shareScreen",
  async (room, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (room === undefined) return;
      if(state.layout.screenShareObj === undefined) {
        return await room.startScreenShare();
      } else {
        state.layout.screenShareObj.leave();
        return undefined;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    layout: [],
    room: {},
    screenShareObj: undefined,
  },
  reducers: {
    setRoom(state, { payload }) {
      state.room = payload;
    },
    setScreenShareObj(state, { payload }) {
      state.screenShareObj = payload;
    }
  },
  extraReducers: {
    [getLayout.pending]: (state, action) => {},
    [getLayout.fulfilled]: (state, { payload }) => {
      state.layout = payload;
    },
    [getLayout.rejected]: (state, action) => {},
    //share screen
    [shareScreen.pending]: (state, action) => {},
    [shareScreen.fulfilled]: (state, { payload }) => {
      state.screenShareObj = payload;
    },
    [shareScreen.rejected]: (state, action) => {},
  },
});

export const { setRoom } = layoutSlice.actions;

export default layoutSlice.reducer;
