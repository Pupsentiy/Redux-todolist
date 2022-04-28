import { ADD_TODO, COMPLETED, DOWNTASK, REMOVE_TODO, UPTASK } from "./actionTypes";

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

export const upTask = id => ({
    type: UPTASK,
    payload: id,

})

export const downTask = (id) => ({
    type: DOWNTASK,
    payload: id,
})
