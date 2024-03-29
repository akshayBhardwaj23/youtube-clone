import { createSlice } from "@reduxjs/toolkit";

const youtubeSearchSlice = createSlice({
  name: "youtubeSearch",
  initialState: {},
  reducers: {
    addSearchVideos: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addSearchVideos } = youtubeSearchSlice.actions;
export default youtubeSearchSlice.reducer;
