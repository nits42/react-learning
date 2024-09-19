import { createSlice, nanoid } from "@reduxjs/toolkit"; 

const initialState = {
    todos: [
        {
            id: '1', title: 'React - Redux', completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                const {id, title} = action.payload;
                state.todos.push({id, title, completed: false});
            },
            prepare(title) {
                return {payload: {id: nanoid(), title}}
            }
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        },
        updateTodo: (state, action) => {
            const {id, title} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo, deleteTodo, toggleTodo} = todoSlice.actions; 

export const todoReducer =  todoSlice.reducer;