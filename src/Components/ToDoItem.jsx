import React from "react";
import {FaTrashAlt} from 'react-icons/fa'
import ToDoUpdate from "./ToDoUpdate";

function ToDoItem({
    todo, 
    handleUpdateToDo, 
    handleDeleteToDo, 
    handleCompleteToDo,
}){
    return (
        <li>
           <span
            onClick={() => handleCompleteToDo(todo.id)}
           >
                <label 
                    className={`container-done ${todo.done ? 'active' : ''}`}
                ></label>
           </span>
           <ToDoUpdate todo={todo} handleUpdateToDo={handleUpdateToDo}/>
           <button className='btn-delete' onClick={() => handleDeleteToDo(todo.id)}>
                <FaTrashAlt />
            </button>
        </li>
    );
}

export default ToDoItem;