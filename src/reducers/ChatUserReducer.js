import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatUsers: [],
  loading: false,
  error: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.chatUsers.push(action.payload);
    },
  },
});

export const { saveUser } = chatSlice.actions;
export default chatSlice.reducer;