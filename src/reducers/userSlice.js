import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users:[]
  },
  reducers: {
    add: (state, action) => {
      if(!state.users.find(user => user && action.payload._id===user._id))
        state.users.push(action.payload);
    }
  }
});

export const { add } = userSlice.actions;

export default userSlice.reducer;
