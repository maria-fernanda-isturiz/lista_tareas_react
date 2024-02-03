import { useReducer, useEffect } from "react"
import {toDoReducer} from '../ToDoReducer'

const useToDo = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(
        toDoReducer, 
        initialState, 
        init
    );

    const todosCount = todos.length
    const pendingTodos = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleNewToDo = todo => {
        const action = {
            type: 'Add To-Do',
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteToDo = id => {
        const action = {
            type: 'Delete To-Do',
            payload: id,
        };
        
        dispatch(action);
    };

    const handleCompleteToDo = id => {
        const action = {
            type: 'Complete To-Do',
            payload: id,
        };

        dispatch(action);
    };

    const handleUpdateToDo = (id, description) => {
        const action = {
            type: 'Update To-Do',
            payload: {
                id,
                description
            },
        };

        dispatch(action);
    };

    return {
        todos,
        todosCount,
        pendingTodos,
        handleNewToDo,
        handleDeleteToDo,
        handleCompleteToDo,
        handleUpdateToDo
    }
}

export default useToDo;