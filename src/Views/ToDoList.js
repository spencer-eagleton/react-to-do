import ToDo from '../Components/ToDo';
export default function ToDoList({ toDos }) {
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          <ToDo toDo={toDo} />
        </li>
      ))}
    </ul>
  );
}
