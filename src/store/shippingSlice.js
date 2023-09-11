import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phoneNo: "",
  },
  reducers: {
    setShippingInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearShippingInfo: (state) => {
      return { ...state }; // Use {...state} to clear the shipping information
    },
  },
});

export const { setShippingInfo, clearShippingInfo } = shippingSlice.actions;  //** Exporting  Action */

export default shippingSlice.reducer;   //** Exporting Reducer */
