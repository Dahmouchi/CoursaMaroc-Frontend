
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
