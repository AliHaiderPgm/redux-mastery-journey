import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
        addToCart: (state, actions) => {
            const index = state.findIndex(i => i.id === actions.payload.id)
            index === -1 ? state.push(actions.payload) : state[index].quantity += 1
        },
        placeOrder: (state, actions) => {
            return []
        }
    }
})

export const { addToCart, placeOrder } = cartSlice.actions;
export default cartSlice.reducer;