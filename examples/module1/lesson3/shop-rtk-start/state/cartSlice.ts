import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';
import { RootState } from '../store';
import { Product } from '../types/Product';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const addToCartFunc = (
  state: CartState,
  action: PayloadAction<Product | CartItem>
) => {
  const cartItem = state.items.find((item) => {
    return item.id === action.payload.id;
  });

  if (cartItem) {
    state.items = state.items.map((item) =>
      item.id === action.payload.id
        ? { ...item, amount: cartItem.amount + 1 }
        : item
    );
  } else {
    const newItem = { ...action.payload, amount: 1 };
    state.items.push(newItem);
  }
};

const removeFromCartFunc = (
  state: CartState,
  action: PayloadAction<number>
) => {
  const newCart = state.items.filter((item) => {
    return item.id !== action.payload;
  });

  state.items = newCart;
};

const decreaseAmountFunc = (
  state: CartState,
  action: PayloadAction<number>
) => {
  const cartItem = state.items.find((item) => item.id === action.payload);

  if (!cartItem) {
    return;
  }

  if (cartItem.amount <= 1) {
    return removeFromCartFunc(state, action);
  }

  const newCart = state.items.map((item) =>
    item.id === action.payload ? { ...item, amount: cartItem.amount - 1 } : item
  );

  state.items = newCart;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: addToCartFunc,
    clearCart: (state) => {
      state.items = [];
    },
    removeFromCart: removeFromCartFunc,
    decreaseAmount: decreaseAmountFunc,
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, clearCart, removeFromCart, decreaseAmount } = actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectItemAmount = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);
export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.amount;
  }, 0);

export default reducer;
