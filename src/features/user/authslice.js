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
          //console.log(action.payload);
          state.isAuthenticated = true;
          state.userDetails=action.payload;
        },
        logout: (state) => {
          //console.log("Trying to empty redux store");
          state.isAuthenticated = false;
          state.userDetails=null
        },
      },
    });
    
    export const { login, logout } = authSlice.actions;
    export default authSlice.reducer;
    
    