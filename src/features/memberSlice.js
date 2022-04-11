import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    memberList: [],
    thisMemberId: null,
    memberLeft: false,
  },
  reducers: {
    setMemberList(state, { payload }) {
      console.log(payload, "setMemberList");
      state.memberList = payload;
    },
    setMemberId(state, { payload }) {
      console.log(payload, "thisMemberId");
      state.thisMemberId = payload;
    },
    setMemberLeft(state, {payload}) {
      state.memberLeft = payload;
    }
  },
  extraReducers: {},
});

export const { setMemberList, setMemberId, setMemberLeft } = memberSlice.actions;

export default memberSlice.reducer;
