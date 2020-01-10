import { 
    ADD_ITEM, 
    REMOVE_ITEM, 
    TOGGLE_STATUS, 
    REQUEST_TASKS_SUCCESS, 
    REQUEST_TASKS_FAILED 
} from './actionTypes';
import { apiCall } from '../api/api';

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

export const requestTasks = () => (dispatch) => {
    apiCall('http://localhost:9000/tasks')
        .then(res => {
            nextTodoId = res.length;
            res.map(item => {
                return dispatch({ type: REQUEST_TASKS_SUCCESS, payload: item})
            });
        })
        .catch(err => dispatch({ type: REQUEST_TASKS_FAILED, payload: err}))
}