import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            state.user = null;
        }
    }
})

export const { setUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;