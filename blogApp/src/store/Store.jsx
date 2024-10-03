import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';

const store = configureStore({ // Create a store
    reducer: {
        // Add reducers here
        auth: AuthSlice
    }
});

export default store;