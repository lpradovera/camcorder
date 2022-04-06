import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getLayout = createAsyncThunk("layout/getLayout", async (room) => {
  try {
    console.log(await room.hasOwnProperty("getLayouts"));
    return (await room.getLayouts()).layouts;
  } catch (error) {
    console.log(error.message);
  }
});

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    layout: [],
    room: {},
  },
  reducers: {
    setRoom(state, { payload }) {
      state.room = payload;
      console.log(payload, "PAYLOAD");
    },
  },
  extraReducers: {
    [getLayout.pending]: (state, action) => {},
    [getLayout.fulfilled]: (state, { payload }) => {
      if (typeof payload === "undefined") return;
      state.layout = payload;
    },
    [getLayout.rejected]: (state, action) => {},
  },
});

export const { setRoom } = layoutSlice.actions;

export default layoutSlice.reducer;
