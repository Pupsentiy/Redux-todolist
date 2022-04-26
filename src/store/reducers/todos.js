import { ADD_TODO, COMPLETED,  REMOVE_TODO } from "../action/actionTypes";
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

        default:
            return state
    }
}


