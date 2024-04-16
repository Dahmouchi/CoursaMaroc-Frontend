
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

<<<<<<< HEAD
const UserSlice = createSlice({
=======
const userSlice = createSlice({
>>>>>>> origin/dev
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

<<<<<<< HEAD
export const { loginSuccess } = UserSlice.actions;
export default UserSlice.reducer;
=======
export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
>>>>>>> origin/dev
