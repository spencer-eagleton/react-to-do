export default function ToDoForm({ handleSubmit, setNewTask }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Task</label>
        <input type="text" onChange={(e) => setNewTask(e.target.value)}></input>
        <input type="submit" />
      </form>
    </div>
  );
}
