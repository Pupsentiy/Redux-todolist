import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../action/actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
};

const todos = (state = initialState, action) => {
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
        case REMOVE_TODO: {
            const { todos } = state
            return {
                todos: todos.filter(todo => todo.id !== action.payload)
            }
        }

        case EDIT_TODO: {
            const { todos } = state
            const index = todos.filter(todo => todo.id === action.payload.id)
            todos[index].text = action.payload.text
            return state
        }

        default:
            return state
    }
}
export default todos