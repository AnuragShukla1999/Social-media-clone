import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authData: null,
  loading: false,
  error: false,
  updateLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: state => {
      state.loading = true;
      state.error = false;
    },
    authSuccess: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.authData = action.payload;
      state.loading = false;
      state.error = false;
    },
    authFail: state => {
      state.loading = false;
      state.error = true;
    },
    updatingStart: state => {
      state.updateLoading = true;
      state.error = false;
    },
    updatingSuccess: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.authData = action.payload;
      state.updateLoading = false;
      state.error = false;
    },
    updatingFail: state => {
      state.updateLoading = false;
      state.error = true;
    },
    logOut: state => {
      localStorage.clear();
      state.authData = null;
      state.loading = false;
      state.error = false;
      state.updateLoading = false;
    },
    followUser: (state, action) => {
      state.authData.user.following.push(action.payload);
    },
    unfollowUser: (state, action) => {
      state.authData.user.following = state.authData.user.following.filter(
        personId => personId !== action.payload
      );
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFail,
  updatingStart,
  updatingSuccess,
  updatingFail,
  logOut,
  followUser,
  unfollowUser,
} = authSlice.actions;

export default authSlice.reducer;