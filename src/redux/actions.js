import { ADD_ITEM, REMOVE_ITEM, TOGGLE_STATUS } from './actionTypes';

let nextTodoId = 0;

export const addItem = taskName => ({
    type: ADD_ITEM,
    id: nextTodoId++,
    taskName
});

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
});

export const toggleStatus = id => ({
    type: TOGGLE_STATUS,
    id
});