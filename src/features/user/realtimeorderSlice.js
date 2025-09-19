// features/orders/realTimeOrdersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const realTimeOrdersSlice = createSlice({
  name: "realTimeOrders",
  initialState: {
    orders: [],       // store all incoming orders
    loading: false,   // optional, if you want to handle loading state
    error: null,      // optional, for errors
  },
  reducers: {
    // Add a new order from socket
    addOrder: (state, action) => {
      state.orders.unshift(action.payload); // newest orders on top
    },
  }
});

// Export actions
export const {  addOrder } = realTimeOrdersSlice.actions;

// Export reducer
export default realTimeOrdersSlice.reducer;
