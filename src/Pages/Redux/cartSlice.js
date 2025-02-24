import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload)
            }
            localStorage.setItem("cart", JSON.stringify(state.items));// Cập nhật localStorage
        },
        UPDATE_CART: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity
            }
            localStorage.setItem("cart", JSON.stringify(state.items));  // Cập nhật localStorage
        },
        REMOVE_FROM_CART: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items));// Cập nhật localStorage
        }

    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } = cartSlice.actions;
export default cartSlice.reducer;