import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from './deviceSlice';
import recordingSlice from './recordingSlice';
import layoutSlice from './layoutSlice';


export default configureStore({
    reducer: {
        device: deviceSlice,
        recording: recordingSlice,
        layout: layoutSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}
);