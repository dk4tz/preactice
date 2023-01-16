import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalNumItems: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalNumItems = action.payload.totalNumItems;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload.item;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      state.totalNumItems++;
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      state.totalNumItems--;
      state.changed = true;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
