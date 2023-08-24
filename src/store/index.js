import { configureStore } from '@reduxjs/toolkit'
import registerSlice from "./loginSlice";
import alert from "./alertSlice";
export const store = configureStore({
    reducer: {
        auth: registerSlice,
        alert
    },
})
