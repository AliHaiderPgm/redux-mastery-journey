import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import todoReducer from './slices/todo'
import cartReducer from './slices/cart'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoReducer,
        cart: cartReducer,
    }
})

export default store