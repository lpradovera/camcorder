import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getLayout = createAsyncThunk("layout/getLayout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    if (typeof (state.room.room.getLayouts) === "function") {
      return (await state.room.room.getLayouts()).layouts;
    }
  } catch (error) {
    console.log(error.message);
  }
});

export const setLayout = createAsyncThunk("layout/setLayout", async (layout, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    if (typeof (state.room.room.setLayout) === "function") {
      await state.room.room.setLayout({ name: layout });
    }
  } catch (error) {
    console.log(error.message);
  }
});

export const shareScreen = createAsyncThunk(
  "layout/shareScreen",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room === undefined) return;
      if(state.layout.screenShareObj === undefined) {
        if(typeof (state.room.room.startScreenShare) !== 'function') return
        return await state.room.room.startScreenShare();
      } else {
        if(typeof (state.layout.screenShareObj.leave) !== 'function') return
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
    screenShareObj: undefined,
  },
  reducers: {
    setScreenShareObj(state, { payload }) {
      state.screenShareObj = payload;
    },
    
  },
  extraReducers: {
    [getLayout.pending]: (state, action) => {},
    [getLayout.fulfilled]: (state, { payload }) => {
      state.layout = payload;
    },
    [getLayout.rejected]: (state, action) => {},
    //set layout 
    [setLayout.pending]: (state, action) => {},
    [setLayout.fulfilled]: (state, { payload }) => {
    },
    [setLayout.rejected]: (state, action) => {},
    //share screen
    [shareScreen.pending]: (state, action) => {},
    [shareScreen.fulfilled]: (state, { payload }) => {
      state.screenShareObj = payload;
    },
    [shareScreen.rejected]: (state, action) => {},
  },
});

export const {  } = layoutSlice.actions;

export default layoutSlice.reducer;
