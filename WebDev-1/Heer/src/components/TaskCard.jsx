// // HeroCard - displays one hero and action buttons

function TaskCard({ task, onDeleteTask, onToggleStatus }) {
  return (
    <div className={`bg-white p-5 rounded-xl shadow-sm border-l-4 flex flex-col justify-between gap-4 transition-all duration-200 hover:shadow-md ${
      task.status === 'Completed' ? 'border-l-emerald-500 shadow-emerald-50/50' :
      task.status === 'In Progress' ? 'border-l-amber-500 shadow-amber-50/50' :
      'border-l-indigo-500 shadow-indigo-50/50'
    }`}>
      <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
      
      <p className="text-gray-600">
        <span className="font-medium">Status:</span> {task.status}
      </p>

      <div className="flex gap-2 mt-2">
        <button
          type="button"
          onClick={() => onToggleStatus(task.id)}
          className={`flex-1 text-sm font-medium py-2 px-3 rounded-md transition ${
            task.status === 'Completed'
              ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          {task.status === 'Completed' ? 'Pending' : 'Completed'}
        </button>

        <button
          type="button"
          onClick={() => onDeleteTask(task.id)}
          className="flex-1 bg-red-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;