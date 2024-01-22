    // authSlice.js
    import { createSlice } from '@reduxjs/toolkit';

    const authSlice = createSlice({
      name: 'auth',
      initialState: {
        isAuthenticated:false,
        userDetails:null
    
      },
      reducers: {
        login: (state,action) => {
          // console.log(action.payload);
          // console.log(action.payload.userDetails);

          state.isAuthenticated = true;
          state.userDetails=action.payload;
        },
        logout: (state) => {
          state.isAuthenticated = false;
          state.userDetails=null
        },
      },
    });
    
    export const { login, logout } = authSlice.actions;
    export default authSlice.reducer;
    
    