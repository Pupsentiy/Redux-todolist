import { ADD_TODO, COMPLETED, DOWNTASK, REMOVE_TODO, UPTASK } from "../action/actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [],
};

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    {
                        id: uuidv4(),
                        text: action.payload,
                        completed: false,
                    },
                    ...state.todos
                ]
            };

        case REMOVE_TODO: {
            const { todos } = state
            return {
                todos: todos.filter(todo => todo.id !== action.payload)
            }
        };

        case COMPLETED: {
            const { todos } = state;
            return {
                todos: todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        }

        case UPTASK: {
            const { todos } = state
            const index = todos.findIndex(todo => todo.id === action.payload); 
            if (index > 0 && todos.length > 1) {
                const newState = [...todos];
                [newState[index], newState[index - 1]] = [newState[index - 1], newState[index]];
                return {todos: newState}
              } else {
                return state;
              }
        }

        case DOWNTASK: {
            const { todos } = state
            const index = todos.findIndex(todo => todo.id === action.payload); 
            if (index >= - 1 && todos.length > 1) {
                const newState = [...todos];
                [newState[index], newState[index + 1]] = [newState[index + 1], newState[index]];
                return {todos: newState}
              } else {
                return state;
              }
        }
        default:
            return state
    }

}
