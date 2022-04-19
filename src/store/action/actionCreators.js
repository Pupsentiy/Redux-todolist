import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./actionTypes";

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

export const editTodo = id => { 
    return { 
        type: EDIT_TODO,
        payload: id
    }
}
