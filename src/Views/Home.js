import ToDoForm from '../Components/ToDoForm';
import { useState } from 'react';
import { createToDo, fetchToDos } from '../services/todos';

export default function Home() {
  const [newTask, setNewTask] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    await createToDo({ newTask });
  };
  return (
    <div>
      <h1>Your to-do list</h1>

      <ToDoForm newTask={newTask} setNewTask={setNewTask} handleSubmit={submit} />
    </div>
  );
}
