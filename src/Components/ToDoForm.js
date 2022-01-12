export default function ToDoForm({ handleSubmit, newTask, setNewTask }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Task</label>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
        <input type="submit" />
      </form>
    </div>
  );
}
