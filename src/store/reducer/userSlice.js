
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../Axios';

// get user thunk 
export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/user');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);


const initialState = {
  token: null,
  user: null,
  isLogged: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogged = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
    });

  },
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
