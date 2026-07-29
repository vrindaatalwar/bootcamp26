import { useState } from "react";
import "./App.css";
import BoardColumn from "./components/BoardColumn";
import initialData from "./data";

function App() {
  const [board, setBoard] = useState(initialData);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
    };

    setBoard({
      ...board,
      backlog: [...board.backlog, task],
    });

    setNewTask("");
  }

  function removeTask(column, id) {
    setBoard({
      ...board,
      [column]: board[column].filter((task) => task.id !== id),
    });
  }

  function moveLeft(column, id) {
    if (column === "growing") {
      const task = board.growing.find((task) => task.id === id);

      setBoard({
        ...board,
        growing: board.growing.filter((task) => task.id !== id),
        backlog: [...board.backlog, task],
      });
    }

    if (column === "finished") {
      const task = board.finished.find((task) => task.id === id);

      setBoard({
        ...board,
        finished: board.finished.filter((task) => task.id !== id),
        growing: [...board.growing, task],
      });
    }
  }

  function moveRight(column, id) {
    if (column === "backlog") {
      const task = board.backlog.find((task) => task.id === id);

      setBoard({
        ...board,
        backlog: board.backlog.filter((task) => task.id !== id),
        growing: [...board.growing, task],
      });
    }

    if (column === "growing") {
      const task = board.growing.find((task) => task.id === id);

      setBoard({
        ...board,
        growing: board.growing.filter((task) => task.id !== id),
        finished: [...board.finished, task],
      });
    }
  }

  return (
    <div className="app">

      <h1>☕ CozyBoard</h1>
      <p className="subtitle">Organize your day, one cozy task at a time.</p>

      <div className="add-task">

        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>

      </div>

      <div className="board">

        <BoardColumn
          title="📖 Task Nook"
          column="backlog"
          tasks={board.backlog}
          removeTask={removeTask}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />

        <BoardColumn
          title="🌱 Growing"
          column="growing"
          tasks={board.growing}
          removeTask={removeTask}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />

        <BoardColumn
          title="☕ Finished"
          column="finished"
          tasks={board.finished}
          removeTask={removeTask}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />

      </div>

    </div>
  );
}

export default App;