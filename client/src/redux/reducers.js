import { ADD_ITEM, REMOVE_ITEM, TOGGLE_STATUS } from './actionTypes';

const initialState = [];

export const todoList = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    taskName: action.taskName,
                    isDone: false
                }
            ]
        case REMOVE_ITEM:
            const numId = +(action.id);
            return state.filter(item => item.id !== numId);
        case TOGGLE_STATUS:
            return state.map(item =>
                item.id === action.id ? { ...item, isDone: !item.isDone } : item
            );
        default:
            return state
    }
}
