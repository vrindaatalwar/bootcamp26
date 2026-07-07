import TaskCard from './TaskCard'


function TaskList({ tasks, onDeleteTask, onToggleStatus }) {
  if (tasks.length === 0) {
    return (
      <section className="text-center py-8">
        <p className="text-xl font-semibold text-gray-800">No Tasks Yet!</p>
        <p className="text-gray-600 mt-2">Add your first task.</p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">List of Tasks:</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </section>
  )
}

export default TaskList;