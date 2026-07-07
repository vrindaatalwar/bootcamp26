import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList.jsx'
import TaskStats from './components/TaskStats.jsx'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showPendingOnly, setShowPendingOnly] = useState(false);
  // 1. Add state to hold the search text
  const [searchTerm, setSearchTerm] = useState('');

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }
function handleToggleStatus(taskId) {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
      : task
  );
  setTasks(updatedTasks);
}
  function handleTogglePendingFilter() {
    setShowPendingOnly(!showPendingOnly);
  }

  // 2. Chained filter logic: filters by pending status AND search query title
  const displayedTasks = tasks
    .filter((task) => (showPendingOnly ? task.status !== 'Completed' : true))
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Message check adjusted for search results as well
  const showNoTasksMessage = tasks.length > 0 && displayedTasks.length === 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans bg-yellow-200">
      <Header />

      {/* CHANGED: max-w-4xl changed to max-w-2xl (approx 760px) to make elements wider across the center */}
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <TaskForm onAddTask={handleAddTask} />

        {/* 3. Added Search Input Box element styled with Tailwind */}
        <div className="w-full">
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-900"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleTogglePendingFilter}
            className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-8 rounded-xl font-semibold shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            {showPendingOnly ? '✨Show All Tasks' : '⌛Show Pending Tasks'}
          </button>
        </div>

        {showNoTasksMessage ? (
          <section className="text-center py-8">
            <p className="text-xl font-semibold text-gray-800">
              No Tasks Found
            </p>
          </section>
        ) : (
          <TaskList 
  tasks={displayedTasks} 
  onDeleteTask={handleDeleteTask} 
  onToggleStatus={handleToggleStatus} 
/>
        )}

        <TaskStats tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
