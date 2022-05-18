import { createSlice } from '@reduxjs/toolkit';

const initialState = null

export const userSlice = createSlice({
  name: 'user',
  initialState: {value : initialState},
  reducers: {
     login : (state, action) => {
        state.value = action.payload;
     },
     logout : (state) => {
       state.value = initialState;
     }
  },
});


export const selectUser = (state) => state.user.value
export const { login  , logout  } = userSlice.actions;
export default userSlice.reducer;
