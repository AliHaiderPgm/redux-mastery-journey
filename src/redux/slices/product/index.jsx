import { createSlice } from "@reduxjs/toolkit";
import _products from "../../../api/product.json"

export const productSlice = createSlice({
    name: 'products',
    initialState: _products,
    reducers: {
        updateProduct: (state, action) => {
            const index = state.findIndex(i => i.id === action.payload.id)
            state[index].inventory -= 1
        }
    }
})

export const { updateProduct } = productSlice.actions
export default productSlice.reducer