export default function Home({ handleSubmit, newTask, setNewTask }) {
  return (
    <div>
      <h1>Your to-do list</h1>

      <form onSubmit={handleSubmit}>
        <label>New Task</label>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
        <input type="submit" />
      </form>
    </div>
  );
}
