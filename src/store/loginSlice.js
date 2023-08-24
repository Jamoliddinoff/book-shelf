import { createSlice } from '@reduxjs/toolkit'
const getUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user:getUser || null,
}

export const registerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state,action) => {
            localStorage.setItem('user',JSON.stringify(action.payload));
            state.user = action.payload
        },
        logOute: (state) =>{
            localStorage.removeItem('user');
            state.user= null
        }
    },
})

// Action creators are generated for each case reducer function
export const { signIn,logOute } = registerSlice.actions

export default registerSlice.reducer
