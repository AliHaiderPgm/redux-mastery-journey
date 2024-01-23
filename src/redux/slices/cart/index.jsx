import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
        addToCart: (state, actions) => {
            state.push(actions.payload.item)
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;