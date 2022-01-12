import ToDoForm from '../Components/ToDoForm';
import { useState, useEffect } from 'react';
import { createToDo, fetchToDos, toggleCompleted } from '../services/todos';
import ToDoList from './ToDoList';

export default function Home() {
  const [newTask, setNewTask] = useState('');
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();

      setToDos(data);
    };
    fetchData();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await createToDo(newTask);
  };

  const handleClick = async (newTask) => {
    await toggleCompleted(newTask.id, !newTask.is_complete);
    const resp = await fetchToDos();
    setToDos(resp);
  };

  return (
    <div>
      <h1>Your to-do list</h1>
      <ToDoList toDos={toDos} handleClick={handleClick} />

      <ToDoForm newTask={newTask} setNewTask={setNewTask} handleSubmit={submit} />
    </div>
  );
}
