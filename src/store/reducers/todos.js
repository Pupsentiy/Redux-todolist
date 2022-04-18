import { ADD_TODO } from "../action/actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
};

const todos = (state = initialState, action) => {
    console.log(action)
switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    {
                        id: uuidv4(),
                        text: action.payload,
                        completed: false
                    },
                    ...state.todos
                ]
            };
        default:
            return state
    }
}

export default todos