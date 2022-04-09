import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const participantsVideoUnmute = createAsyncThunk(
  "participants/participantsVideoUnmute",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.videoUnmute({ memberId: id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsVideoMute = createAsyncThunk(
  "participants/participantsVideoMute",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.videoMute({ memberId: id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsRemoveMember = createAsyncThunk(
  "participants/participantsRemoveMember",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.removeMember({ memberId: id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsSetInputVolume = createAsyncThunk(
  "participants/participantsSetInputVolume",
  async (data, thunkAPI) => {
    const id = data.memberId,
      volume = data.volume;
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.setInputVolume({
          memberId: id,
          volume: volume,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsSetOutputVolume = createAsyncThunk(
  "participants/participantsSetOutputVolume",
  async (data, thunkAPI) => {
    const id = data.memberId,
      volume = data.volume;
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.setOutputVolume({
          memberId: id,
          volume: volume,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsAudioUnmute = createAsyncThunk(
  "participants/participantsAudioUnmute",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.audioUnmute({ memberId: id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsAudioMute = createAsyncThunk(
  "participants/participantsAudioMute",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.audioMute({ memberId: id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsDeaf = createAsyncThunk(
  "participants/participantsDeaf",
  async (memberId, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.deaf({ memberId: memberId.id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const participantsUndeaf = createAsyncThunk(
  "participants/participantsUndeaf",
  async (memberId, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      if (state.room.room !== undefined) {
        await state?.room?.room.undeaf({ memberId: memberId.id });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

const participantsSlice = createSlice({
  name: "participants",
  initialState: {
    room: {},
  },
  reducers: {},
  extraReducers: {
    //video unmute
    [participantsVideoUnmute.pending]: (state, action) => {},
    [participantsVideoUnmute.fulfilled]: (state, { payload }) => {},
    [participantsVideoUnmute.rejected]: (state, action) => {},
    //video mute
    [participantsVideoMute.pending]: (state, action) => {},
    [participantsVideoMute.fulfilled]: (state, { payload }) => {},
    [participantsVideoMute.rejected]: (state, action) => {},
    //audio unmute
    [participantsAudioUnmute.pending]: (state, action) => {},
    [participantsAudioUnmute.fulfilled]: (state, { payload }) => {},
    [participantsAudioUnmute.rejected]: (state, action) => {},
    //audio mute
    [participantsAudioMute.pending]: (state, action) => {},
    [participantsAudioMute.fulfilled]: (state, { payload }) => {},
    [participantsAudioMute.rejected]: (state, action) => {},
    //remove member
    [participantsRemoveMember.pending]: (state, action) => {},
    [participantsRemoveMember.fulfilled]: (state, { payload }) => {},
    [participantsRemoveMember.rejected]: (state, action) => {},
    //set input volume
    [participantsSetInputVolume.pending]: (state, action) => {},
    [participantsSetInputVolume.fulfilled]: (state, { payload }) => {},
    [participantsSetInputVolume.rejected]: (state, action) => {},
    //set output volume
    [participantsSetOutputVolume.pending]: (state, action) => {},
    [participantsSetOutputVolume.fulfilled]: (state, { payload }) => {},
    [participantsSetOutputVolume.rejected]: (state, action) => {},
    //deaf
    [participantsDeaf.pending]: (state, action) => {},
    [participantsDeaf.fulfilled]: (state, { payload }) => {},
    [participantsDeaf.rejected]: (state, action) => {},
    //undeaf
    [participantsUndeaf.pending]: (state, action) => {},
    [participantsUndeaf.fulfilled]: (state, { payload }) => {},
    [participantsUndeaf.rejected]: (state, action) => {},
  },
});

export const {} = participantsSlice.actions;

export default participantsSlice.reducer;
