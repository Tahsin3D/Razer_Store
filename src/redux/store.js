import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeReducer'


// Configure store
const store = configureStore({
  reducer: {
    screenSizes: screenSizeReducer,
  },
});

export default store;
