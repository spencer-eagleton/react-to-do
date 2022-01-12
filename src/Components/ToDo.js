export default function ToDo({ toDo }) {
  return (
    <div>
      <h1 key={toDo.id}>{toDo.task}</h1>
      <input type="checkbox" />
    </div>
  );
}
