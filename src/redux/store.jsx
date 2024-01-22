import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import todoReducer from './slices/todo'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoReducer
    }
})

export default store