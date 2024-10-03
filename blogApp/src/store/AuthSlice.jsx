import { createSlice } from '@reduxjs/toolkit';

const initialState = {  // Initial state
    status: false,
    userData: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.status = true;
            // console.log(action.payload.data);
            state.userData = action.payload.data;
        },

        logout(state) {
            state.status = false;
            state.userData = null;
        }

        
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;