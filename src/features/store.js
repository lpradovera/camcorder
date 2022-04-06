import { configureStore } from '@reduxjs/toolkit';
import videoSlice from './videoSlice';
import recordingSlice from './recordingSlice';


export default configureStore({
    reducer: {
        video: videoSlice,
        recording: recordingSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}
);