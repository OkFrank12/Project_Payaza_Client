import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {} || null,
  toggle: false,
  cart: [] as any,
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    onAuthState: (state, { payload }) => {
      state.auth = payload;
    },
    onLogOut: (state) => {
      state.auth = null;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    addToCart: (state: any, { payload }) => {
      let check = state.cart.findIndex((el: any) => el?._id === payload?._id);

      if (check >= 0) {
        state.cart[check].QTY += 1;
      } else {
        const data = {
          ...payload,
          QTY: 1,
        };
        state.cart.push(data);
      }
    },
    removeFromCart: (state: any, { payload }) => {
      state.cart = state.cart.filter((el: any) => el?._id !== payload?._id);
    },
    emptyCart: (state: any) => {
      state.cart = [];
    },
    removeQTYfromCart: (state: any, { payload }) => {
      let check = state.cart.findIndex((el: any) => el?._id === payload?._id);
      if (state.cart[check].QTY > 1) {
        state.cart[check].QTY -= 1;
      } else if (state.cart[check].QTY === 1) {
        state.cart = state.cart.filter((el: any) => el?._id !== payload?._id);
      }
    },
  },
});

export const {
  onAuthState,
  onLogOut,
  onToggleState,
  addToCart,
  emptyCart,
  removeFromCart,
  removeQTYfromCart,
} = reduxState.actions;

export default reduxState.reducer;
