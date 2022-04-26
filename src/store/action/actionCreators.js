import { ADD_TODO, COMPLETED, REMOVE_TODO } from "./actionTypes";

export const addTodo = text => ({
    type: ADD_TODO,
    payload: text
})

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const completed = id => ({ 
        type: COMPLETED,
        payload: id, 
       
})
