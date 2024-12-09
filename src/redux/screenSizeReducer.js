import { createSlice } from "@reduxjs/toolkit";

// Create a slice (reducer + actions)
const screenSizeSlice = createSlice({
  name: "screenSizes",
  initialState: {
    largeScreen: false,
  },
  reducers: {
    setScreenLarge: (state, action) => {
      state.largeScreen = action.payload;
    },
  },
});

export default screenSizeSlice.reducer;
// Export actions
export const { setScreenLarge, setScreenMedium } = screenSizeSlice.actions;
