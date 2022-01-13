export default function ToDo({ toDo, handleClick }) {
  return (
    <div>
      <h1 key={toDo.id}>{toDo.task}</h1>
      <input checked={toDo.is_complete} type="checkbox" onChange={() => handleClick(toDo)} />
    </div>
  );
}
