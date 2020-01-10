import { 
    ADD_ITEM, 
    REMOVE_ITEM, 
    TOGGLE_STATUS,
    REQUEST_TASKS_SUCCESS, 
    REQUEST_TASKS_FAILED 
} from './actionTypes';

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
        case REQUEST_TASKS_SUCCESS:
            return [
                ...state,
                action.payload
            ]
        case REQUEST_TASKS_FAILED:
            console.log(action.payload);
            return state
        default:
            return state
    }
}
