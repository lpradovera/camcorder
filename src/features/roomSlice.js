import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setRoom = createAsyncThunk("room/setRoom", async (room) => {
  try {
    if (room !== undefined) {
      return await room;
    }
  } catch (error) {
    console.log(error.message);
  }
});

export const roomLeave = createAsyncThunk("room/roomLeave", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    if(typeof (state.room.room.leave) !== 'function') return
    if (state.room.room !== undefined) {
      await state.room.room.leave();
    }
  } catch (error) {
    console.log(error.message);
  }
});

const roomSlice = createSlice({
  name: "room",
  initialState: {
    room: {},
  },
  reducers: {},
  extraReducers: {
    [setRoom.pending]: (state, action) => {},
    [setRoom.fulfilled]: (state, { payload }) => {
      state.room = payload;
    },
    [setRoom.rejected]: (state, action) => {},
    // room leave
    [roomLeave.pending]: (state, action) => {},
    [roomLeave.fulfilled]: (state, { payload }) => {
    },
    [roomLeave.rejected]: (state, action) => {},
  },
});

export const {} = roomSlice.actions;

export default roomSlice.reducer;
