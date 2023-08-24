import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        type: null,
        message: null,
    },
    reducers: {
        setAlertAction(state, action) {
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        clearAlert(state) {
            state.type = null;
            state.message = null;
        },
    },
});

export const { setAlertAction, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
