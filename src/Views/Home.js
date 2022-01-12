import ToDoForm from '../Components/ToDoForm';
import { useState, useEffect } from 'react';
import { createToDo, fetchToDos } from '../services/todos';
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
  return (
    <div>
      <h1>Your to-do list</h1>
      <ToDoList toDos={toDos} />

      <ToDoForm newTask={newTask} setNewTask={setNewTask} handleSubmit={submit} />
    </div>
  );
}
