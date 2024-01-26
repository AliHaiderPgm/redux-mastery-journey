import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk('asyncTodos/fetchTodos',
    async () => {
        const response = await fetch('http://localhost:7000/todos')
        if (response.ok) {
            const todos = await response.json()
            return { todos }
        }
    }
)

export const addAsyncTodo = createAsyncThunk('asyncTodos/addTodo',
    async (payload) => {
        const response = await fetch('http://localhost:7000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: payload.title })
        })
        if (response.ok) {
            const todo = await response.json()
            return { todo }
        }
    }
)

export const deleteAsyncTodo = createAsyncThunk('asyncTodos/deleteTodo',
    async (payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            const todos = await response.json()
            return { todos }
        }
    }
)

export const updateAsyncTodo = createAsyncThunk('asyncTodos/updateTodo',
    async (payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: payload.completed })
        })
        if (response.ok) {
            const todo = await response.json()
            return { todo }
        }
    }
)

export const asyncTodoSlice = createSlice({
    name: 'asyncTodos',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTodosAsync.pending, (state, action) => {
                // console.log('Loading todos...')
                state.status = 'loading'
            })
            .addCase(getTodosAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                return action.payload.todos
            })
            .addCase(addAsyncTodo.fulfilled, (state, action) => {
                state.push(action.payload.todo)
            })
            .addCase(deleteAsyncTodo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(deleteAsyncTodo.fulfilled, (state, action) => {
                return action.payload.todos
            })
            .addCase(updateAsyncTodo.fulfilled, (state, action) => {
                const index = state.findIndex(i => i.id === action.payload.todo.id)
                state[index] = action.payload.todo
            })
    }
})

export default asyncTodoSlice.reducer