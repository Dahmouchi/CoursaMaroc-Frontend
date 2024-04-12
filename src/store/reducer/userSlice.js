// src/store/reducers/userReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess } = UserSlice.actions;
export default UserSlice.reducer;
