import React from 'react';
import { useForm } from '../Hooks/useForms';

function ToDoAdd({handleNewToDo}){

    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    });

    const onFormSubmit = e => {
        e.preventDefault();

        if(description.length <= 1) return

        let newToDo = {
            id: new Date().getTime(),
            description: description,
            done: false, 
        }

        handleNewToDo(newToDo);
        onResetForm();
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' 
            className='input-add' 
            name='description' 
            value={description} 
            onChange={onInputChange}
            placeholder='Escriba aquí sus tareas pendientes'/>

            <button className='btn-add' type='submit'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default ToDoAdd;