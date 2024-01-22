import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, actions) => {
            const newTodo = {
                id: Date.now(),
                completed: false,
                title: actions.payload.title,
            }
            state.push(newTodo)
        },
        updateTodo: (state, actions) => {
            const index = state.findIndex(i => i.id === actions.payload.id)
            state[index].completed = actions.payload.completed
        }
    }
})


export const { addTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer