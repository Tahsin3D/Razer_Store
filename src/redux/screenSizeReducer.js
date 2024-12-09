import { createSlice } from "@reduxjs/toolkit";

// Create a slice (reducer + actions)
const screenSizeSlice = createSlice({
    name: 'largeScreen',
    initialState: false,
    reducers: {
      toggle: state=>!state,
      setScreenLarge: (state, action)=>action.payload
    },
  });

  export default screenSizeSlice.reducer;
  // Export actions
  export const { toggle, setScreenLarge } = screenSizeSlice.actions;