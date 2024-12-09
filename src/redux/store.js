import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeReducer'


// Configure store
const store = configureStore({
  reducer: {
    largeScreen: screenSizeReducer,
  },
});

export default store;
