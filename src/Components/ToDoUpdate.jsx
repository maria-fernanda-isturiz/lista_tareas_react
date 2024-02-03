import { useRef } from "react";
import React, { useState } from "react";
import {BiSolidEdit} from 'react-icons/bi'
import { useForm } from "../Hooks/useForms";

function ToDoUpdate({todo, handleUpdateToDo}){

    const {updateDescription, onInputChange} = useForm ({
        updateDescription: todo.description
    });

    const [disabled, setDisabled] = useState(true)
    const focusInputRef = useRef();

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = todo.id
        const description = updateDescription

        handleUpdateToDo(id, description);

        setDisabled(!disabled)

        focusInputRef.current.focus()
    }

    return(
        <form onSubmit={onSubmitUpdate}>
            <input type='text' 
            className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`} 
            name='updateDescription'
            value={updateDescription}
            onChange={onInputChange}
            placeholder='Escriba aquí sus tareas pendientes'
            readOnly={disabled}
            ref={focusInputRef}/>

            <button className='btn-edit' type='submit'>
                <BiSolidEdit />
            </button>
        </form>
    );
}

export default ToDoUpdate;