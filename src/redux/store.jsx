import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import todoReducer from './slices/todo'
import cartReducer from './slices/cart'
import productReducer from './slices/product'
import asyncTodoReducer from './slices/asyncTodos'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoReducer,
        cart: cartReducer,
        product: productReducer,
        asyncTodos: asyncTodoReducer
    }
})

export default store