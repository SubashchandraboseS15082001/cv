import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cart[existingIndex] = {
          ...state.cart[existingIndex],
          cartQuantity: Number(state.cart[existingIndex].cartQuantity) + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextcart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = nextcart;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      state.cart.map((cart) => {
        if (cart.id === action.payload.id) {
          const nextcart = state.cart.filter(
            (item) => item.id !== cart.id
          );

          state.cart = nextcart;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, cartQuantity } = cart;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;