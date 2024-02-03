import { useState } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';
import ToDoAdd from './Components/ToDoAdd';
import useToDo from './Hooks/UseToDo';


function App() {

  const {
    todos,
    todosCount,
    pendingTodos,
    handleNewToDo,
    handleDeleteToDo,
    handleCompleteToDo,
    handleUpdateToDo
  } = useToDo()

  return (
    <>
      <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <div className='counter-todos'>
          <h3>N° de tareas {todosCount}</h3>
          <h3>Tareas Pendientes {pendingTodos}</h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <ToDoAdd  handleNewToDo={handleNewToDo}/>
        </div>

        <ToDoList 
          todos={todos}
          handleUpdateToDo={handleUpdateToDo}
          handleCompleteToDo={handleCompleteToDo}
          handleDeleteToDo={handleDeleteToDo}
        />
      </div>
    </>
  );
}

export default App;
