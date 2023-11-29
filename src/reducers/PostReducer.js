import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: null,
  loading: false,
  error: false,
  uploading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // Action for starting an upload
    uploadStart: state => {
      state.error = false;
      state.uploading = true;
    },
    // Action for successful upload
    uploadSuccess: (state, action) => {
      state.posts = [action.payload, ...state.posts];
      state.uploading = false;
      state.error = false;
    },
    // Action for failed upload
    uploadFail: state => {
      state.uploading = false;
      state.error = true;
    },
    // Action for starting to retrieve posts
    retrieveStart: state => {
      state.loading = true;
      state.error = false;
    },
    // Action for successful retrieval of posts
    retrieveSuccess: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = false;
    },
    // Action for failed retrieval of posts
    retrieveFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  uploadStart,
  uploadSuccess,
  uploadFail,
  retrieveStart,
  retrieveSuccess,
  retrieveFail,
} = postSlice.actions;

export default postSlice.reducer;