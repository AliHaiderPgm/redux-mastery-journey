import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import todoReducer from './slices/todo'
import cartReducer from './slices/cart'
import productReducer from './slices/product'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoReducer,
        cart: cartReducer,
        product: productReducer
    }
})

export default store