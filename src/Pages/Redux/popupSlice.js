import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
    product: null, // Stores the selected product details
    user: JSON.parse(localStorage.getItem('loggedInUser')) || null,
};

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        SET_PRODUCT: (state, action) => {
            state.product = action.payload // Set selected product
        },
        SHOW_POPUP: (state, action) => {
            state.isVisible = true;
            state.product = action.payload // Set selected product
            state.position = action.payload.position || state.position; // Use default if undefined

        },
        HIDE_POPUP: (state) => {
            state.isVisible = false;
            state.product = null;
        },
        ON_LOGIN: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("loggedInUser", JSON.stringify(action.payload)); // Store user in LocalStorage
        },
        ON_LOGOUT: (state) => {
            state.user = null;
            localStorage.removeItem('loggedInUser')
        }

    }

}
)

export const { SHOW_POPUP, HIDE_POPUP, SET_PRODUCT, ON_LOGIN, ON_LOGOUT } = popupSlice.actions;
export default popupSlice.reducer



