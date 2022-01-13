import ToDo from '../Components/ToDo';
export default function ToDoList({ toDos, handleClick }) {
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          <ToDo toDo={toDo} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}
