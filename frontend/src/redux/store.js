import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
