import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({
    todos, 
    handleUpdateToDo, 
    handleDeleteToDo, 
    handleCompleteToDo,
}) {
    return (
        <ul>
            {todos.map(todo => <ToDoItem 
            key={todo.id}
            todo={todo}
            handleUpdateToDo={handleUpdateToDo}
            handleCompleteToDo={handleCompleteToDo}
            handleDeleteToDo={handleDeleteToDo}
           /> )}
        </ul>
    );
};

export default ToDoList