import Tasks from "./Tasks";

function BoardColumn({
  title,
  tasks,
  column,
  removeTask,
  moveLeft,
  moveRight,
}) {
  return (
    <div className="column">

      <h2>{title}</h2>

      {tasks.map((task) => (
        <Tasks
          key={task.id}
          task={task}
          column={column}
          removeTask={removeTask}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />
      ))}

    </div>
  );
}

export default BoardColumn;