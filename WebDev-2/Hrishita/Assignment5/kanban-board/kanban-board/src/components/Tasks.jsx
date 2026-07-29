function Tasks({ task, removeTask, moveLeft, moveRight, column }) {
  return (
    <div className="task-card">

      <p>{task.title}</p>

      <div className="buttons">

        <button onClick={() => moveLeft(column, task.id)}>
          👈🏽
        </button>

        <button onClick={() => moveRight(column, task.id)}>
         👉🏽
        </button>

        <button onClick={() => removeTask(column, task.id)}>
          ❌
        </button>

      </div>

    </div>
  );
}

export default Tasks;