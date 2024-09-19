import {configureStore} from '@reduxjs/toolkit';
import { todoReducer } from '../features/Todo/ToDoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});