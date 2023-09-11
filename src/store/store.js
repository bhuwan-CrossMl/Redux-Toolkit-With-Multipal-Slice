import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import shippingReducer from './shippingSlice';

const store=configureStore({
    reducer:{
        cart:cartReducer,   // nick name of cartReducer is cart we have set
        shipping: shippingReducer, 
    }
})

export default store;