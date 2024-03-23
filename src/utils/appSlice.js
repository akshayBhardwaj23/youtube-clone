import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
    openMenu: (state, action) => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
export default appSlice.reducer;
