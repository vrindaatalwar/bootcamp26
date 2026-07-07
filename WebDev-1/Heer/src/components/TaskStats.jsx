
function TaskStats({ tasks }) {
  
  const totalTasks = tasks.length;
  const completedTask= tasks.filter(task => task.status === 'Completed').length;
  const pendingTask= tasks.filter(task => task.status !== 'Completed').length;

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        All Your Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-2xl font-bold text-gray-900">{totalTasks}</p>
          <p className="text-sm text-gray-600 mt-1">Total Tasks</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-2xl font-bold text-gray-900">{completedTask}</p>
          <p className="text-sm text-gray-600 mt-1">Completed Tasks</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-2xl font-bold text-gray-900">{pendingTask}</p>
          <p className="text-sm text-gray-600 mt-1">Pending Tasks</p>
        </div>
      </div>
    </section>
  )
}

export default TaskStats