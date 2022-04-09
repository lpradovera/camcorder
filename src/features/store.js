import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from './deviceSlice';
import recordingSlice from './recordingSlice';
import layoutSlice from './layoutSlice';
import roomSlice from './roomSlice';
import participantsSlice from './participantsSlice';


export default configureStore({
    reducer: {
        device: deviceSlice,
        recording: recordingSlice,
        layout: layoutSlice,
        room: roomSlice,
        participants: participantsSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}
);