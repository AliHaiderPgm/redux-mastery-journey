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
    initialState: {
        data: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        reset: (state, action) => {
            state.isError = false
            state.isLoading = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getTodosAsync.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getTodosAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.todos
            })
            .addCase(getTodosAsync.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.data = []
            })
            .addCase(addAsyncTodo.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(addAsyncTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.data.push(action.payload.todo)
            })
            .addCase(addAsyncTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(deleteAsyncTodo.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteAsyncTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.todos
            })
            .addCase(deleteAsyncTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(updateAsyncTodo.fulfilled, (state, action) => {
                const index = state.data.findIndex(i => i.id === action.payload.todo.id)
                state.data[index] = action.payload.todo
            })
    }
})

export const { reset } = asyncTodoSlice.actions
export default asyncTodoSlice.reducer