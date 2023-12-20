import { configureStore } from '@reduxjs/toolkit';
import userReduce from './features/user/userSlice';
import cartReduce from './features/cart/cartSlice';
const store = configureStore({
  reducer: {
    user: userReduce,
    cart: cartReduce,
  },
});
export default store;
